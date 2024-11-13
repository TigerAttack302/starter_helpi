import React, { useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { getResponse } from './DetailedQuestions';
import { keyData } from '../App';

import './Results.css';
import './DetailedQuestions';

async function sendMessage(): Promise<void> {
    const userInput = (document.getElementById('user-input') as HTMLInputElement).value;
    if (!userInput) return;


    const responseElement = document.getElementById('response1')!;
    responseElement.innerHTML = 'Loading...';


    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${keyData}`,
                    'Content-Type': 'application/json'
                },
            }
        );


        const message = response.data.choices[0].message.content;
        responseElement.innerHTML = message;
    } catch (error) {
        responseElement.innerHTML = 'Error: ' + (error as Error).message;
    }
}


// Make the sendMessage function available globally
(window as any).sendMessage = sendMessage;


//------------------------------------------------------------------


export async function sendAnswers(Input:string): Promise<void> {
    const userInput = Input;
    if (!userInput) return;


    const responseElement = document.getElementById('response')!;
    responseElement.innerHTML = 'Loading...';


    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${keyData}`,
                    'Content-Type': 'application/json'
                },
            }
        );


        const message = response.data.choices[0].message.content;
        responseElement.innerHTML = message;
    } catch (error) {
        responseElement.innerHTML = 'Error: ' + (error as Error).message;
    }
}

// Make the sendAnswers function available globally
(window as any).sendAnswers = sendAnswers;

//------------------------------------------------------------------

export function ResultsDetailed():JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        sendAnswers(getResponse());
    }, [])

    return (
        <div>
            <div className='home-button-results'>
                <button onClick={() => navigate('/')}>Back to Home</button>
                <div className='results-header'><h1 className='results-header-text'>Results</h1></div>
            </div>
        <div className='response'>
            <h3>ChatGPT response:</h3>
            <div id="response"></div>
        </div>
        <div id="response1"></div>
        <div className='communication'>
            <Form.Control type="textarea" id="user-input" placeholder="Communicate with ChatGPT here..."/>
            <Button onClick= {() => sendMessage()} className='send-message' >Send</Button>
        </div>
        <script src="script.js" defer></script>
        <hr/>
        </div>
    )
}