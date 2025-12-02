# Use Python 3.11 with PyTorch as base image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONPATH=/app \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy requirements first to leverage Docker cache
COPY requirements-ml.txt .

# Install Python dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements-ml.txt

# Copy the ML code
COPY fraudshieldai/ml /app/ml
COPY data /app/data

# Create necessary directories
RUN mkdir -p /app/models /app/data/processed /app/logs

# Command to run the ML service
CMD ["python", "-m", "ml.service"]
