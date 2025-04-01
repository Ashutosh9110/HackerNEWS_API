# HackerNews Top Stories

A web application that displays the top 10 HackerNews stories. The application consists of a Django backend API that fetches data from the HackerNews API and a React frontend that displays the stories.

## Features

- Django backend API to fetch top stories from HackerNews
- React frontend to display the stories
- Responsive design
- Error handling
- Real-time data from HackerNews

## Project Structure

```
hackernews/
├── api/                 # Django API app
├── frontend/            # React frontend
├── hackernews_project/  # Django project settings
├── manage.py            # Django management script
└── README.md            # Project documentation
```

## Setup Instructions

### Backend (Django)

1. Create a virtual environment:
   ```
   python -m venv .venv
   ```

2. Activate the virtual environment:
   - Windows: `.venv\Scripts\activate`

3. Install required packages:
   ```
   pip install django djangorestframework django-cors-headers requests
   ```

4. Apply migrations:
   ```
   python manage.py migrate
   ```

5. Run the development server:
   ```
   python manage.py runserver
   ```

   The API will be available at http://127.0.0.1:8000/api/top-stories/

### Frontend (React)

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

   The React app will be available at http://localhost:3000

## API Endpoints

- `GET /api/top-stories/`: Returns the top 10 HackerNews stories with details including title, author, URL, score, and time.

## Technologies Used

- **Backend**: Django, Django REST Framework, Requests
- **Frontend**: React, Axios
- **API**: HackerNews API

