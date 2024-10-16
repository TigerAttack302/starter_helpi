import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Button, Form } from 'react-bootstrap';
//import { HashRouter, Route } from 'react-router-dom';

export function DetailedQuestions():JSX.Element {
    const navigate = useNavigate();
    return (
        <div>
        <button onClick={() => navigate('/')}>Go to Home</button>
          <h1>Basic Questions Page</h1>
          <p>This is the content of the Basic Questions page.</p>
        </div>
      );
}