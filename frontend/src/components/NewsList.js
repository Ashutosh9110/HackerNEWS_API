import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/top-stories/');
        setStories(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching news: ' + err.message);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <div className="loading">Loading top stories...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="news-list">
      <h1>HackerNews Top 10 Stories</h1>
      {stories.length === 0 ? (
        <p>No stories found</p>
      ) : (
        stories.map((story, index) => (
          <NewsItem key={index} story={story} />
        ))
      )}
    </div>
  );
};

export default NewsList; 