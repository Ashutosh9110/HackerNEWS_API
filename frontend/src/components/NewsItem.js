import React from 'react';

const NewsItem = ({ story }) => {
  return (
    <div className="news-item">
      <h3>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h3>
      <div className="news-item-details">
        <span>By: {story.author}</span>
        <span>Score: {story.score}</span>
        <span>Time: {story.time}</span>
      </div>
    </div>
  );
};

export default NewsItem; 