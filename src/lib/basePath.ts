export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

export function withBasePath(path: string): string {
  if (!path) return basePath;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}


