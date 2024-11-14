import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';
import CareerCafe from './HomePictures/CareerCafe.png'

export function Home():JSX.Element {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='home-header'>
                <img src={CareerCafe} alt="img not found" className='logo'/>
                <h1> <b> The Career Cafe </b> </h1> 
                <img src={CareerCafe} alt="img not found" className='logo'/>
            </div>
            
            <div className="row">
                <h1 className='menu'>Menu</h1>
                <div className='blurb'>
                    <text>Here at the Career Cafe, we hope to brew up the perfect career for you.</text> 
                    <br></br>
                    <text>Take a look at one of our two selections below, and pick the one to your taste!</text>
                </div>
                <div className='column1'>
                    <div className='desc-bubble'>
                        <h1 className="header1">The Quick Brew</h1>
                        <br />
                        <div className="description">
                            <p>The Quick Brew career questionaire gives you a short, concise quiz with quick and easy-to-answer questions.
                            The design of this quiz is to give you an easy, generalized way to figure out the best career choice
                            for you.</p>
                            <br></br>
                            <div className='fancy-desc'> 
                                <p>Recommended for those who want their coffee as quick as possible.</p>
                                <Button onClick={() => navigate('/basic-questions')}>Have a Quick Brew</Button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='column2'>
                    <div className='desc-bubble'>
                        <h1 className="header2">A Full Roast</h1>
                        <br />
                        <div  className="description">
                            <p>The Full Roast career questionaire delves deeper into your personality and interests. The questions offered
                            here will be more elaborate and more in-depth to better accurately figure out the best career choice 
                            for you.</p>
                            <br></br>
                            <div className='fancy-desc'>
                                <p>Recommended for those who want their coffee as cultivated as possible.</p>
                                <Button onClick={() => navigate('/detailed-questions')}>Have a Full Roast</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-bottom'></div>
        </div>
      );
}
