import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Home(): JSX.Element {
  const navigate = useNavigate(); // This is the hook used for navigation

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/basic-questions')}>Go to Basic Questions</button>
      <button onClick={() => navigate('/detailed-questions')}>Go to Detailed Questions</button>

    </div>
  );
}
