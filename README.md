# AI Code Review Assistant with Specmatic

## Overview
AI Code Review Assistant is a FastAPI-based application that analyzes source code and provides feedback on bugs, security issues, performance, best practices, complexity, and metrics.

## Features
- Upload source code files
- Static analysis
- Complexity and metrics analysis
- FastAPI backend
- OpenAPI specification
- Contract testing with Specmatic
- Docker support

## Tech Stack
- Python
- FastAPI
- SQLAlchemy
- Docker
- Specmatic

## Run the Application

```bash
uvicorn main:app --reload
```

Open:

```
http://127.0.0.1:8000/docs
```

## Run Contract Tests

```bash
docker compose up test --abort-on-container-exit
```

## Repository Structure

- backend/
- frontend/
- specs/
- docker-compose.yml
- specmatic.yaml

## API Coverage

- POST /upload
- 100% API coverage with Specmatic
