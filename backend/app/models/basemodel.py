from peewee import *
from app.database import conn


class BaseModel(Model):
    class Meta:
        database = conn
