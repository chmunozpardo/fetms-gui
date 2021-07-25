FROM tiangolo/uvicorn-gunicorn:python3.8

LABEL maintainer="Sebastian Ramirez <tiangolo@gmail.com>"

RUN pip install --no-cache-dir fastapi peewee pymysql fastapi-redis-cache python-multipart hashlib

COPY ./app /app