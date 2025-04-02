# Docker Setup for DeutNet

This repository contains a Dockerized setup for the DeutNet application with Django backend and React frontend.

## Prerequisites

- Docker
- Docker Compose

### Installing Docker

If you haven't installed Docker yet, follow these instructions:

#### Windows:
1. Download Docker Desktop from [Docker Hub](https://www.docker.com/products/docker-desktop)
2. Install Docker Desktop by following the wizard
3. Start Docker Desktop and ensure it's running

#### macOS:
1. Download Docker Desktop from [Docker Hub](https://www.docker.com/products/docker-desktop)
2. Install Docker Desktop by dragging to Applications folder
3. Start Docker Desktop from Applications

#### Linux (Ubuntu):
```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker
```

### Installing Docker Compose
Docker Compose is included in Docker Desktop for Windows and macOS. For Linux:
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashutosh9110/HackerNEWS_API.git
   cd HackerNEWS_API
   ```

2. Build and start the Docker containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost
   - Backend API: http://localhost:8000/api/top-stories/

## Building Images

To build the backend image:
```bash
docker build -t deutnet-backend -f Dockerfile.backend .
```

To build the frontend image:
```bash
docker build -t deutnet-frontend -f Dockerfile.frontend .
```

## Running for the First Time

To run the containers individually instead of with Docker Compose:

### Backend Container:
```bash
docker run --name deutnet-backend -p 8000:8000 -v $(pwd):/app deutnet-backend
```

### Frontend Container:
```bash
docker run --name deutnet-frontend -p 80:80 deutnet-frontend
```

## Development

### Backend Development

- You can run Django management commands inside the container:
  ```bash
  docker-compose exec backend python manage.py <command>
  ```

### Frontend Development

For local frontend development:

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Set up the environment:
   - Create a `.env.development` file with:
     ```
     REACT_APP_API_URL=http://localhost:8000/api/top-stories/
     ```

3. Start the development server:
   ```bash
   npm start
   ```

## Testing

### Backend Tests
```bash
docker-compose exec backend python manage.py test
```

### Frontend Tests
```bash
docker-compose exec frontend npm test
```

## Deployment

For production deployment, modify the following files as needed:

1. `docker-compose.yml`: Change environment variables for production
2. Update `SECRET_KEY` and set `DEBUG=False` for production
3. Add proper `ALLOWED_HOSTS` for your domain

## Container Structure

- **Backend**: Django application running on port 8000
- **Frontend**: React application served via Nginx on port 80








