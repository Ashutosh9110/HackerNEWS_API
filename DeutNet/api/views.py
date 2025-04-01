from django.shortcuts import render
import requests
import json
from datetime import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class TopStoriesView(APIView):
    def get(self, request):
        try:
            # Fetch the list of top stories IDs
            top_stories_url = "https://hacker-news.firebaseio.com/v0/topstories.json"
            response = requests.get(top_stories_url)
            response.raise_for_status()  # Raising exception for HTTP errors
            
            # Getting the top 10 story IDs
            story_ids = response.json()[:10]
            
            # Fetching the details for each story
            stories = []
            for story_id in story_ids:
                story_url = f"https://hacker-news.firebaseio.com/v0/item/{story_id}.json"
                story_response = requests.get(story_url)
                story_response.raise_for_status()
                story_data = story_response.json()
                
                # Format the time to be more readable
                if 'time' in story_data:
                    timestamp = story_data['time']
                    readable_time = datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')
                else:
                    readable_time = "Unknown"
                
                # Extract required details
                story = {
                    'title': story_data.get('title', 'No Title'),
                    'author': story_data.get('by', 'Unknown'),
                    'url': story_data.get('url', ''),
                    'score': story_data.get('score', 0),
                    'time': readable_time
                }
                stories.append(story)
            
            return Response(stories)
            
        except requests.exceptions.RequestException as e:
            # Handle API connectivity issues
            return Response(
                {"error": f"Error fetching data from HackerNews API: {str(e)}"},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        except Exception as e:
            # Handle other exceptions
            return Response(
                {"error": f"An unexpected error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
