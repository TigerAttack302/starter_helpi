import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import './Results.css';

//-------------------------------------------------------------------------------------------------
import axios from 'axios';
import { keyData } from '../App';


async function sendMessage(): Promise<void> {
    const userInput = (document.getElementById('user-input') as HTMLInputElement).value;
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

// Make the sendMessage function available globally
(window as any).sendMessage = sendMessage;

//------------------------------------------------------------------

export function Results():JSX.Element {
    const navigate = useNavigate();

    return (
        <div>
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
            <hr/>
            <button onClick= {() => sendMessage()} >Send</button>
        <div id="response"></div>
        <Form.Control type="textarea" id="user-input" placeholder="Type your message here..."/>
        <script src="script.js" defer></script>
        </div>
    )
}