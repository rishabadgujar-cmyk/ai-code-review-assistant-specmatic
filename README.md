# AI Code Review Assistant

An AI-powered code review assistant built using FastAPI, React, Docker, and Groq. The application analyzes source code and provides suggestions regarding complexity, quality, and maintainability.

---

## Features

- Analyze source code
- Detect code complexity
- Generate AI-based review suggestions
- FastAPI backend
- React frontend
- Docker support
- Contract testing with Specmatic

---

## Project Structure

```text
backend/
frontend/
specs/
docker-compose.yml
README.md
specmatic.yaml
```

---

## Prerequisites

Before running the project, install:

- Python 3.12
- Node.js
- npm
- Docker Desktop
- Git

---

## Clone Repository

```bash
git clone <repository-url>
cd ai-code-review-assistant
```

---

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
GROQ_API_KEY=your_groq_api_key
```

You can generate a Groq API key from:

https://console.groq.com/keys

---

## Running the Backend

Navigate to the backend directory:

```bash
cd backend
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Running with Docker

Build and start the containers:

```bash
docker compose up --build
```

---

## Contract Testing

Run Specmatic contract tests:

```bash
docker compose run test
```

---

## Example Request

```json
{
  "code": "def add(a, b): return a + b"
}
```

---

## Example Response

```json
{
  "complexity_score": 1,
  "issues": [],
  "suggestions": [
    "Add documentation for better readability"
  ]
}
```

---

## Technologies Used

- Python
- FastAPI
- React
- Docker
- Groq
- Specmatic

---

## Future Enhancements

- Support additional programming languages
- Improve AI-generated suggestions
- Add authentication
- CI/CD integration

---

## Contract Testing and API Coverage

This project uses Specmatic for contract testing and API coverage verification.

Run contract tests:

```bash
docker compose run test
```

Specmatic validates that the implementation conforms to the OpenAPI contract defined in:

```text
specs/codelensai.yaml
```

---

## Learning and Improvements

During development, the following improvements were made:

- Added Docker support for easier deployment.
- Integrated Specmatic for contract testing.
- Improved README instructions for reproducibility.
- Added environment variable configuration for Groq API access.
- Updated Specmatic configuration from v1 to v3.
- Removed generated reports from version control for better project clarity.

---

## License

This project is intended for educational and learning purposes.
