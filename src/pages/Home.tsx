import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';

export function Home():JSX.Element {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className="row">
                <div className='column'>
                    <h1 className="header">Basic Questions</h1>
                    <br />
                    <div className="description">
                        <p>This is the content of the Basic Questions page.</p>
                        <Button onClick={() => navigate('/basic-questions')}>Go to Basic Questions</Button>
                    </div>   
                </div>
                <div className='column'>
                    <h1 className="header">Detailed Questions</h1>
                    <br />
                    <div  className="description">
                        <p>This is the content of the Detailed Questions page.</p>
                        <Button onClick={() => navigate('/detailed-questions')}>Go to Detailed Questions</Button>
                    </div>
                </div>
            </div>
        </div>
      );
}