import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';

export function Home():JSX.Element {
    const navigate = useNavigate();
    return (
        <div>
            <div className="row">
                <div className='column'>
            <h1>Basic Questions Page</h1>
            <Button onClick={() => navigate('/basic-questions')}>Go to Basic Questions</Button>
            <p>This is the content of the Basic Questions page.</p>
            </div>
            <div className='column'>
            <h1>Detailed Questions Page</h1>
            <Button onClick={() => navigate('/detailed-questions')}>Go to Detailed Questions</Button>
            <p>This is the content of the Detailed Questions page.</p>
                </div>
            </div>
        </div>
      );
}