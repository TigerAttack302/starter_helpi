import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Button, Form } from 'react-bootstrap';
//import { HashRouter, Route } from 'react-router-dom';

export function Home():JSX.Element {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Basic Questions Page</h1>
            <button onClick={() => navigate('/basic-questions')}>Go to Basic Questions</button>
            <p>This is the content of the Basic Questions page.</p>
            <br />
            <h1>Detailed Questions Page</h1>
            <button onClick={() => navigate('/detailed-questions')}>Go to Detailed Questions</button>
            <p>This is the content of the Detailed Questions page.</p>
        </div>
      );
}