# db_config.py

import os
import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        user=os.getenv("DB_USER", "root"),           # <-- problem likely here
        password=os.getenv("DB_PASSWORD", ""),       # <-- or here
        database=os.getenv("DB_NAME", "bookdb")
    )
