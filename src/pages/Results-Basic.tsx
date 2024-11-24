import React, { useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { getResponse, keyData } from './BasicQuestions';

import './Results.css';
import './BasicQuestions';

const messages: Array<{ role: string; content: string }> = [
    { role: 'system', content: 'Draw comparisons between the user\'s qualities and coffee ingredients or pastry ingredients' }, // System message to set behavior
];

async function sendMessage(userInput: string, location: string): Promise<void> {
    if (!userInput) return;
    messages.push({ role: 'user', content: userInput });

    const responseElement = document.getElementById(location)!;
    responseElement.innerHTML = 'Loading...';


    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o-mini',
                messages,
            },
            {
                headers: {
                    'Authorization': `Bearer ${keyData}`,
                    'Content-Type': 'application/json'
                },
            }
        );


        const message = response.data.choices[0].message.content;
        messages.push({ role: 'system', content: message });
        responseElement.innerHTML = message;
    } catch (error) {
        responseElement.innerHTML = 'Error: ' + (error as Error).message;
    }
}


// Make the sendMessage function available globally
(window as any).sendMessage = sendMessage;


//------------------------------------------------------------------

export function ResultsBasic():JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        sendMessage(getResponse(),'response');
    }, [])

    return (
        <div>
            <div className='home-button-results'>
                <button onClick={() => navigate('/')}>Back to Home</button>
                <div className='results-header'><h1 className='results-header-text'>Results</h1></div>
            </div>
        <div className='CGPTresponse'>
            <h3>ChatGPT response:</h3>
            <div id="response"></div>
        </div>
        <div id="response1"></div>
        <div className='communication'>
            <Form.Control type="textarea" id="user-input" placeholder="Communicate with ChatGPT here..."/>
            <Button onClick= {() => sendMessage(((document.getElementById('user-input') as HTMLInputElement).value),'response1')} className='send-message' >Send</Button>
        </div>
        <script src="script.js" defer></script>
        <hr/>
        </div>
    )
}