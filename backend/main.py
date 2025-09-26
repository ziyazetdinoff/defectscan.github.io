from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import Response, JSONResponse
import numpy as np
import matplotlib

# Use non-interactive backend for server-side rendering
matplotlib.use("Agg")
import matplotlib.pyplot as plt

from io import BytesIO


app = FastAPI(title="Magnetogram API", version="1.0.0")


# Allow CORS (configure in production to specific origins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health() -> JSONResponse:
    return JSONResponse({"status": "ok"})


def _parse_text_to_array(text: str) -> np.ndarray:
    """Parse magnetogram text into an (N, 8) numpy array.

    - Accepts lines like "2.371,2.136,..."
    - Ignores optional prefixes like "L1:" if present
    - Accepts comma/semicolon/tab/space separated values
    - Pads or trims columns to 8
    """
    # Normalize line endings
    lines = [ln for ln in text.replace("\r", "").split("\n") if ln.strip()]
    parsed_rows = []
    for raw_line in lines:
        line = raw_line.strip()
        # Remove optional Lxx: prefix
        if ":" in line and line.split(":", 1)[0].strip().startswith("L"):
            line = line.split(":", 1)[1].strip()

        # Unify separators to commas
        unified = (
            line.replace(";", ",").replace("\t", ",")
        )
        parts = [p for p in unified.split(",") if p.strip() != ""]
        if len(parts) <= 1:
            # fallback to whitespace split
            parts = [p for p in line.split() if p.strip() != ""]

        try:
            row = [float(x) for x in parts]
        except ValueError:
            # skip malformed lines
            continue
        parsed_rows.append(row)

    if not parsed_rows:
        raise ValueError("no valid numeric rows found")

    arr = np.array(parsed_rows, dtype=float)
    if arr.ndim != 2:
        raise ValueError("invalid data shape")

    # Ensure 8 columns: trim or pad using edge values
    if arr.shape[1] > 8:
        arr = arr[:, :8]
    elif arr.shape[1] < 8:
        pad_cols = 8 - arr.shape[1]
        arr = np.pad(arr, ((0, 0), (0, pad_cols)), mode="edge")

    return arr


def _render_heatmap(arr: np.ndarray) -> bytes:
    """Render (N, 8) data as a heatmap PNG, sensors on Y axis."""
    # Transpose so sensors are along Y axis (0..7)
    image_data = arr.T

    fig, ax = plt.subplots(figsize=(6, 3), dpi=200)
    im = ax.imshow(
        image_data,
        aspect="auto",
        origin="lower",
        cmap="magma",
    )

    ax.set_xlabel("Samples")
    ax.set_ylabel("Sensor index")
    ax.set_yticks(list(range(8)))
    ax.set_yticklabels([str(i + 1) for i in range(8)])

    cbar = fig.colorbar(im, ax=ax, fraction=0.046, pad=0.04)
    cbar.set_label("Field")

    plt.tight_layout()
    buf = BytesIO()
    fig.savefig(buf, format="png", bbox_inches="tight")
    plt.close(fig)
    buf.seek(0)
    return buf.getvalue()


@app.post("/magnetogram/image")
async def magnetogram_image(file: UploadFile = File(...)) -> Response:
    if not file or not file.filename:
        raise HTTPException(status_code=400, detail="file is required")

    raw = await file.read()
    if not raw:
        raise HTTPException(status_code=400, detail="empty file")

    try:
        # Try utf-8 first, fallback to latin-1
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            text = raw.decode("latin-1")

        arr = _parse_text_to_array(text)
        png_bytes = _render_heatmap(arr)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception:
        raise HTTPException(status_code=500, detail="failed to process file")

    return Response(content=png_bytes, media_type="image/png")


# For `python -m uvicorn backend.main:app --reload`
def get_app() -> FastAPI:
    return app


