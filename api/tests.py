from django.test import TestCase
from unittest.mock import patch
from rest_framework.test import APIClient
from rest_framework import status

class TopStoriesAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = '/api/top-stories/'

    @patch('api.views.requests.get')
    def test_successful_api_response(self, mock_get):
        mock_get.side_effect = [
            type('Response', (), {
                'json': lambda: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                'raise_for_status': lambda: None
            }),
            *[type('Response', (), {
                'json': lambda: {
                    'title': f'Test Story {i}',
                    'by': f'Author {i}',
                    'url': f'https://example.com/{i}',
                    'score': i * 10,
                    'time': 1617235200  # Fixed timestamp for testing
                },
                'raise_for_status': lambda: None
            }) for i in range(1, 11)]
        ]

        response = self.client.get(self.url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 10)
        
        # This checks the content of the first story
        self.assertEqual(response.data[0]['title'], 'Test Story 1')
        self.assertEqual(response.data[0]['author'], 'Author 1')
        self.assertEqual(response.data[0]['url'], 'https://example.com/1')
        self.assertEqual(response.data[0]['score'], 10)
        self.assertTrue('time' in response.data[0])

    @patch('api.views.requests.get')
    def test_api_error_handling(self, mock_get):
        mock_get.side_effect = Exception('API is down')
        
        response = self.client.get(self.url)
        
        self.assertEqual(response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)
        self.assertTrue('error' in response.data)
