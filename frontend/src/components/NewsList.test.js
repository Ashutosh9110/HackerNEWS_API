import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import NewsList from './NewsList';

// Mock axios
jest.mock('axios');

// Import axios after mocking
import axios from 'axios';

describe('NewsList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays loading state initially', async () => {
    // Mock axios to return a promise that doesn't resolve immediately
    axios.get.mockImplementation(() => new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: [] });
      }, 100);
    }));

    render(<NewsList />);
    
    // The component should initially show loading
    expect(screen.getByText(/loading top stories/i)).toBeInTheDocument();
  });

  test('displays stories when they are loaded', async () => {
    // Mock successful response
    const mockStories = [
      {
        title: 'Test Story 1',
        author: 'Rahul Singh',
        url: 'https://example.com/1',
        score: 100,
        time: '2023-04-01 12:00:00'
      },
      {
        title: 'Test Story 2',
        author: 'Rashmi Singh',
        url: 'https://example.com/2',
        score: 200,
        time: '2023-04-01 13:00:00'
      }
    ];
    
    axios.get.mockResolvedValue({ data: mockStories });

    // Render component
    render(<NewsList />);

    // Wait for the stories to be loaded
    await waitFor(() => {
      expect(screen.getByText('HackerNews Top 10 Stories')).toBeInTheDocument();
    });
    
    expect(screen.getByText('Test Story 1')).toBeInTheDocument();
    expect(screen.getByText('By: Rahul Singh')).toBeInTheDocument();
    expect(screen.getByText('Score: 100')).toBeInTheDocument();
    expect(screen.getByText('Test Story 2')).toBeInTheDocument();
  });

  test('displays error message when API request fails', async () => {
    // Mock error response
    axios.get.mockRejectedValue(new Error('Network Error'));

    // Render component
    render(<NewsList />);

    // Wait for the error to be displayed
    await waitFor(() => {
      expect(screen.getByText(/error fetching news/i)).toBeInTheDocument();
    });
  });
});