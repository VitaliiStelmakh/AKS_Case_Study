from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from typing import Union
import random

app = FastAPI()

origins = [
    "*"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    rand_list = random.sample(range(1, 50), 7)
    return {"Your happy numbers are": rand_list}