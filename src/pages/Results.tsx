import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Results.css';

export function Results():JSX.Element {
    const navigate = useNavigate();

    return (
        <div>
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
            <hr/>
        </div>
    )
}