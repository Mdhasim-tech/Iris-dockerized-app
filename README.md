🌸 Iris Classification – Full Stack ML App (Dockerized)

A full-stack machine learning application that predicts the Iris flower species based on input features.



The project is fully containerized using Docker, allowing anyone to run it locally with one command.



🚀 Tech Stack

Backend

Python

Flask

scikit-learn

Frontend

Next.js (TypeScript)

CSS (separate stylesheet)

MLOps

Docker

Docker Compose

Docker Hub

✨ Features

Trained ML model using the Iris dataset

Flask API for predictions

Interactive frontend UI

CORS-enabled backend

Fully dockerized (no local setup required)

🧠 ML Model

Dataset: Iris Dataset

Algorithm: Random Forest Classifier

Input:

Sepal Length

Sepal Width

Petal Length

Petal Width

Output:

Iris-setosa

Iris-versicolor

Iris-virginica

🐳 Run Locally (Recommended)

Steps

--- Firstly install docker desktop in your system and have it running then simply follow the below steps..



⚡ Run Without Cloning the Repository (Docker Only)

If you do not want to clone the entire source code, you can still run the complete application using Docker images.



Steps

Create a new empty folder anywhere on your system

Inside that folder, create a file named docker-compose.yml

Paste the following content into it:

services: backend: image: hasimtech/iris-backend:latest ports: - "5000:5000" restart: always



frontend: image: hasimtech/iris-frontend:latest ports: - "3000:3000" depends_on: - backend restart: always



4.Open a terminal in that folder



5.Run:



docker compose up



Docker will automatically:



Pull the backend and frontend images from Docker Hub



Start both services



Connect them internally



Open in browser:



Frontend → http://localhost:3000



Backend → http://localhost:5000



✅ No source code ✅ No Node.js or Python installation ✅ One command to run the full app
