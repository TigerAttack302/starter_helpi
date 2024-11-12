import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Results-Detailed.css';
import './BasicQuestions';

export function ResultsBasic():JSX.Element {
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