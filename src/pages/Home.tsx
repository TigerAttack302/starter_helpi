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
                        <p>This basic career questionaire gives you a short, concise quiz with quick and simple questions.
                            The design of this quiz is to give you an easy, generalized way to figure out the best career choice
                            for you.
                        </p>
                        <Button onClick={() => navigate('/basic-questions')}>Go to Basic Questions</Button>
                    </div>   
                </div>
                <div className='column'>
                    <h1 className="header">Detailed Questions</h1>
                    <br />
                    <div  className="description">
                        <p>This detailed career questionaire delves deeper into your personality and interest. The questions offered
                            here will be more elaborate and more in-depth to better accurately figure out the best career choice 
                            for you.
                        </p>
                        <Button onClick={() => navigate('/detailed-questions')}>Go to Detailed Questions</Button>
                    </div>
                </div>
            </div>
        </div>
      );
}