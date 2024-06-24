FROM python:3.11-alpine3.20

WORKDIR /api

COPY . .

RUN pip install --upgrade pip \
    pip install -r requirements.txt

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]