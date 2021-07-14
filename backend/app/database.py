import os
from dotenv import load_dotenv
from peewee import *

load_dotenv()

DB_HOSTNAME = os.getenv('DB_HOSTNAME')
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_DATABASE = os.getenv('DB_DATABASE')

conn = MySQLDatabase(
    database=DB_DATABASE,
    user=DB_USERNAME,
    password=DB_PASSWORD,
    host=DB_HOSTNAME
)
