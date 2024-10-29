import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'

import './BasicQuestions.css';

export function BasicQuestions(): JSX.Element {
    const navigate = useNavigate();
    const [progress, setProgress] = useState<number>(0);
    const [completion, setCompletion] = useState<boolean>(false);
    const [q1, setq1] = useState<boolean>(false);
    const [q2, setq2] = useState<boolean>(false);
    const [q3, setq3] = useState<boolean>(false);
    const [q4, setq4] = useState<boolean>(false);
    const [q5, setq5] = useState<boolean>(false);
    const [q6, setq6] = useState<boolean>(false);
    const [q7, setq7] = useState<boolean>(false);
    const q1Arr = ["High School Student", "College Student", "Graduated", "None of the Above"];
    const q2Arr = ["Math/Science","Arts/Creative Thinking", "Computer Science", "Business/Economics"];
    const q3Arr = ["Solving complex problems","Helping Others","Designing / Creative Thinking", "Analyzing data"];
    const q4Arr = ["Leading/Managing", "Providing support", "Innovating new ideas", "Communication"];
    const q5Arr = ["Hardworker", "Smart", "Accountable", "Versatile"];
    const q6Arr = ["Collaborative team setting", "Quiet and independent", "Structures / Organized setting", "Fast / Dynamic setting"];
    const q7Arr = ["Career Development", "Salary / Benefits", "Work Environment", "Company's Reputation"];

    function updateAnswer1() {
        if (!q1) {
            setq1(true);
            setProgress(progress+14);
            updateCompletion();
        }
    }
    function updateAnswer2() {
        if (!q2) {
            setq2(true);
            setProgress(progress+14);
            updateCompletion();
        }
    }
    function updateAnswer3() {
        if (!q3) {
            setq3(true);
            setProgress(progress+14);
            updateCompletion();
        }
    }
    function updateAnswer4() {
        if (!q4) {
            setq4(true);
            setProgress(progress+14);
            updateCompletion();
        }
    }
    function updateAnswer5() {
        if (!q5) {
            setq5(true);
            setProgress(progress+14);
            updateCompletion();
        }
    }
    function updateAnswer6() {
        if (!q6) {
            setq6(true);
            setProgress(progress+15);
            updateCompletion();
        }
    }
    function updateAnswer7() {
        if (!q7) {
            setq7(true);
            setProgress(progress+15);
            updateCompletion();
        }
    }

    function updateCompletion() {
        if (progress >= 85) {
            setCompletion(true);
        }
    }

    return (
        <div>
            {completion && <Confetti width={window.innerWidth*.95} height={3 * window.innerHeight}/>}
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
            <h1 className="h1">Basic Questions
                <div className='progress-section-b'>
                    <text>Progress:  </text>
                <progress value={progress} max={100}/>
            </div></h1>
            
            <div>
                <div>
                    <h3>Question 1 out of 7</h3>
                    <div className='question'>
                        <h3>Which one of these best describes you?</h3>
                    </div>
                    <div className='buttonGroup'>
                        {q1Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q1"
                                onChange={updateAnswer1}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Question 2 out of 7</h3>
                    <div className='question'>
                    <h3>What do you find as your favorite subject?</h3></div>
                    <div className='buttonGroup'>
                    {q2Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q2"
                                onChange={updateAnswer2}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Question 3 of 7</h3>
                    <div className='question'>
                    <h3>What do you enjoy doing the most?</h3></div>
                    <div className='buttonGroup'>
                    {q3Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q3"
                                onChange={updateAnswer3}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Question 4 out of 7</h3>
                    <div className='question'>
                    <h3>Which role do you find yourself in a job?</h3></div>
                    <div className='buttonGroup'>
                        {q4Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q4"
                                onChange={updateAnswer4}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Question 5 out of 7</h3>
                    <div className='question'>
                    <h3>What Best Describes yourself?</h3></div>
                    <div className='buttonGroup'>
                        {q5Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q5"
                                onChange={updateAnswer5}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Question 6 out of 7</h3>
                    <div className='question'>
                    <h3>What type of work environment would you thrive in?</h3></div>
                    <div className='buttonGroup'>
                        {q6Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q6"
                                onChange={updateAnswer6}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Question 7 out of 7</h3>
                    <div className='question'>
                    <h3>What is your first priority in a job?</h3></div>
                    <div className='buttonGroup'>
                        {q7Arr.map((a: string) => (
                            <Form.Check
                                type="radio"
                                name="q7"
                                onChange={updateAnswer7}
                                label={a}
                                key={a}
                                value={a}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/results')} disabled={!completion}>Get Your Results Here!</button>
            <hr/>
        </div>
    );
}
