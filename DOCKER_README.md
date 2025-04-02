# Docker Setup for DeutNet

This repository contains a Dockerized setup for the DeutNet application with Django backend and React frontend.

## Prerequisites

- Docker
- Docker Compose

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and start the Docker containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost
   - Backend API: http://localhost:8000/api/top-stories/

## Development

### Backend Development

- The Django backend code is mounted as a volume, so changes will be reflected immediately.
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

## Troubleshooting

- If you encounter permissions issues, try running Docker commands with sudo
- If the frontend can't connect to the backend, check the CORS settings and network configuration 