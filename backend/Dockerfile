# Use official Python image
FROM python:3.10-slim

# Set working directory inside container
WORKDIR /app

# Copy dependencies
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . .

# Expose Flask port inside the container
EXPOSE 5000

# Run the app inside the container
CMD ["python", "app.py"]
