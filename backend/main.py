from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi import UploadFile, File



from routers.history import router as history_router
from routers.auth import router as auth_router
from models.user import User

from database import engine

from database import Base
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from groq import Groq

import os
import json

from ast_analyzer import analyze_code
from complexity_analyzer import analyze_complexity
from metrics_analyzer import analyze_metrics
from language_detector import (
    get_language
)


# -----------------------------------
# Environment Setup
# -----------------------------------





load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = None

if GROQ_API_KEY:
    client = Groq(
        api_key=GROQ_API_KEY
    )


# -----------------------------------
# FastAPI App
# -----------------------------------

app = FastAPI(
    title="AI Code Review Assistant"
)
app.include_router(history_router)
app.include_router(auth_router)

#Base.metadata.create_all(bind=engine)


# -----------------------------------
# CORS
# -----------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# -----------------------------------
# Groq Client
# -----------------------------------

client = Groq(
    api_key=GROQ_API_KEY
)


# -----------------------------------
# Home Route
# -----------------------------------

@app.get("/")
def home():

    return {
        "status": "running",
        "service": "AI Code Review Assistant"
    }



# Upload Route
# -----------------------------------

@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...)
):
    return {
        "filename": "example.py",
        "score": 85,
        "summary": "Code quality is acceptable but improvements are recommended.",
        "bugs": [
            "Avoid using eval()"
        ],
        "security": [
            "Use of exec() detected"
        ],
        "performance": [
            "Repeated loops may affect speed"
        ],
        "best_practices": [
            "Add docstrings"
        ],
        "complexity": {},
        "metrics": {}
    }