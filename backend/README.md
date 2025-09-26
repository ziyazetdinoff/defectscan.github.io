# Magnetogram FastAPI backend

## Установка и запуск

1. Создайте и активируйте виртуальное окружение (рекомендуется):

```bash
python3 -m venv .venv && source .venv/bin/activate
```

2. Установите зависимости:

```bash
pip install -r backend/requirements.txt
```

3. Запустите сервер (по умолчанию на http://localhost:8000):

```bash
python -m uvicorn backend.main:app --reload
```

## Эндпоинты

- `GET /health` — проверка работоспособности
- `POST /magnetogram/image` — загрузка файла с данными магнитограммы (`multipart/form-data`, поле `file`), ответ — PNG-изображение (тепловая карта 8 датчиков).

Backend включает CORS (разрешены все источники). Для продакшна рекомендовано ограничить список источников.


