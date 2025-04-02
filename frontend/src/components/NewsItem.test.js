import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsItem from './NewsItem';

describe('NewsItem Component', () => {
  const mockStory = {
    title: 'Test Story',
    author: 'John Doe',
    url: 'https://example.com',
    score: 100,
    time: '2023-04-01 12:00:00'
  };

  test('renders story details correctly', () => {
    render(<NewsItem story={mockStory} />);
    
    // Check if title is rendered with proper link
    const titleLink = screen.getByText('Test Story');
    expect(titleLink).toBeInTheDocument();
    expect(titleLink.closest('a')).toHaveAttribute('href', 'https://example.com');
    
    // Check if author, score and time are rendered
    expect(screen.getByText('By: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Score: 100')).toBeInTheDocument();
    expect(screen.getByText('Time: 2023-04-01 12:00:00')).toBeInTheDocument();
  });
}); 