import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import { getResponse } from './BasicQuestions';
import { keyData } from '../App';

import './Results-Basic.css';
import './BasicQuestions';

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

export function ResultsBasic():JSX.Element {
    const navigate = useNavigate();

    return (
        <div>
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
            <hr/>
        <text>{getResponse()}</text>
        <button onClick= {() => sendAnswers(getResponse())} >Send</button>
        <div id="response"></div>
        <hr/>
        <Form.Control type="textarea" id="user-input" placeholder="Type your message here..."/>
        <div id="response1"></div>
        <button onClick= {() => sendMessage()} >Send</button>
        <script src="script.js" defer></script>
        <hr/>
        </div>
    )
}