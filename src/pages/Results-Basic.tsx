import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { getResponse, keyData } from './BasicQuestions';

import './Results.css';
import './BasicQuestions';
// the messages array and the sendMessages function were sent in from chatGPT, we didn't know how to implement it and thought that chatGPT would know
// The sendMessages array was modified by hand to make sure that there was a different location of where the output would be.
const messages: Array<{ role: string; content: string }> = [
    { role: 'system', content: 'List the best career for them, and give a brief description of what that career entails. Do this in a paragraph with no line breaks' }, // System message to set behavior
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

// below is also chat GPT the one before the bar of dashes
// Make the sendMessage function available globally
(window as any).sendMessage = sendMessage;


//------------------------------------------------------------------

export function ResultsBasic():JSX.Element {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<string>('');

    const clearInput = () => {
        setInputValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        setInputValue('');
        sendMessage(((document.getElementById('user-input') as HTMLInputElement).value),'response1');
        }
    };

    useEffect(() => {
        sendMessage(getResponse(),'response');
    }, [])

    return (
        <div>
            <div className='home-button-results'>
                <button onClick={() => navigate('/')}>Back to Home</button>
                <div className='results-header'><h1 className='results-header-text'>Results</h1></div>
            </div>
            {/* There was some use of chatGPT here although it was modified by hand to add in  */}
            <div className='CGPTresponse'>
                <h3 className='your-brew'>Your Brew:</h3>
                <div id="response"></div>
            </div>
            <div id="response1">Start your conversation here!</div>
            <div className='communication'>
                <Form.Control type="textarea"
                id="user-input"
                placeholder="Communicate with ChatGPT here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}/>
                <Button onClick= {() => {
                    sendMessage(((document.getElementById('user-input') as HTMLInputElement).value),'response1');
                    clearInput();}
                    }
                    className='send-message' >Send</Button>
            </div>
            <script src="script.js" defer></script>
            <div className='results-row'>
                <div className='suggestions'>
                    <h1>Try asking some of these some questions!</h1>
                    <br/>
                    <ul>
                        <li>Where can I find out more information about this career?</li>
                        <li>What would be my first steps going into this career?</li>
                        <li>How much does this career pay?</li>
                        <li>I'm not sure if this career fits me, is there any similar career I might enjoy?</li>
                    </ul>
                </div>
                <div className='error-handling'>
                    <h1>If results are not processed...</h1>
                    <br/>
                    <p>If ChatGPT is not responding, and your results aren't showing, you may have to refresh the page and retake the assessment.
                        Make sure your inserted API key is correct! Don't worry, this brew will be worth it!</p>
                </div>
            </div>
        </div>
    )
}