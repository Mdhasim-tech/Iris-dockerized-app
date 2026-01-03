# 🌸 Iris Classification – Full Stack ML App (Dockerized)

A full-stack machine learning application that predicts the **Iris flower species** based on user-provided input features.

The entire project is **fully containerized using Docker**, allowing anyone to run it locally with **a single command**.

---

## 🚀 Tech Stack

### Backend
- Python  
- Flask  
- scikit-learn  

### Frontend
- Next.js (TypeScript)  
- CSS (separate stylesheet)

### MLOps / DevOps
- Docker  
- Docker Compose  
- Docker Hub  

---

## ✨ Features

- Trained ML model using the Iris dataset  
- REST API built with Flask for predictions  
- Frontend UI  
- CORS-enabled backend  
- Fully dockerized (no local setup required)

---

## 🧠 ML Model

- **Dataset:** Iris Dataset  
- **Algorithm:** Random Forest Classifier  

### Input Features
- Sepal Length  
- Sepal Width  
- Petal Length  
- Petal Width  

### Output Classes
- Iris-setosa  
- Iris-versicolor  
- Iris-virginica  

---

## 🐳 Run Locally (Recommended)

### Prerequisite
- Install **Docker Desktop** and make sure it is running on your system

---

## ⚡ Run Without Cloning the Repository (Docker Only)

If you **do not want to clone the entire source code**, you can still run the complete application using pre-built Docker images.

### Steps

1. Create a new empty folder anywhere on your system  
2. Inside that folder, create a file named `docker-compose.yml`  
3. Paste the following content into it:

```yaml
services:
  backend:
    image: hasimtech/iris-backend:latest
    ports:
      - "5000:5000"
    restart: always

  frontend:
    image: hasimtech/iris-frontend:latest
    ports:
      - "3000:3000"
    depends_on:
      - backend
    restart: always
    
4.Open a terminal inside that folder

5.Run:

docker compose up


Docker will automatically:

Pull the backend and frontend images from Docker Hub

Start both services

Connect them internally

Open in Browser

Frontend → http://localhost:3000

Backend → http://localhost:5000
