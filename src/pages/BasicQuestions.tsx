import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

import './BasicQuestions.css';
import Popup from 'reactjs-popup';

import q1pic from './BasicQuestionsPictures/early-college-high-school-placeholder.jpg';
import q2pic from './BasicQuestionsPictures/college-classes.webp';
import q3pic from './BasicQuestionsPictures/images.jpg';
import q4pic from './BasicQuestionsPictures/shutterstock_1464234134-1024x684.jpg';
import q5pic from './BasicQuestionsPictures/images (1).jpg';
import q6pic from './BasicQuestionsPictures/20230729_BLP505.webp';
import q7pic from './BasicQuestionsPictures/1703323776064.jpg';

let finalResponses: string;
export function getResponse() {
    return finalResponses;
}

// Local storage for API key
export let keyData = '';
const saveKeyData = 'MYKEY';
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
}

export function BasicQuestions(): JSX.Element {
    const navigate = useNavigate();
    const [progress, setProgress] = useState<number>(0);
    const [completion, setCompletion] = useState<boolean>(false);
    const [q1, setq1] = useState<string>('');
    const [q2, setq2] = useState<string>('');
    const [q3, setq3] = useState<string>('');
    const [q4, setq4] = useState<string>('');
    const [q5, setq5] = useState<string>('');
    const [q6, setq6] = useState<string>('');
    const [q7, setq7] = useState<string>('');
    const q1Arr = ['High School Student', 'College Student', 'Graduated', 'None of the Above'];
    const q2Arr = ['Math/Science', 'Arts/Creative Thinking', 'Computer Science', 'Business/Economics'];
    const q3Arr = ['Solving complex problems', 'Helping Others', 'Designing / Creative Thinking', 'Analyzing data'];
    const q4Arr = ['Leading/Managing', 'Providing support', 'Innovating new ideas', 'Communication'];
    const q5Arr = ['Hardworker', 'Smart', 'Accountable', 'Versatile'];
    const q6Arr = ['Collaborative team setting', 'Quiet and independent', 'Structures / Organized setting', 'Fast / Dynamic setting'];
    const q7Arr = ['Career Development', 'Salary / Benefits', 'Work Environment', 'Company\'s Reputation'];
    const [response, setResponse] = useState<string>('Given the following prompts and answers, what is the best career for me? ');

    const [key, setKey] = useState<string>(keyData);

    function updateAnswer(a: string, question: number) {
        const setAnswer = [setq1, setq2, setq3, setq4, setq5, setq6, setq7][question - 1];
        if (![q1, q2, q3, q4, q5, q6, q7][question - 1]) {
            setProgress(progress + (question < 6 ? 14 : 15));
            updateCompletion();
        }
        setAnswer(a);
    }

    function updateCompletion() {
        if (progress >= 85) {
            setCompletion(true);
        }
    }

    function submitResults() {
        const responses = [
            `Level of education: ${q1}`,
            `Favorite subject: ${q2}`,
            `I enjoy: ${q3}`,
            `Preferred job role: ${q4}`,
            `I'd describe myself as: ${q5}`,
            `Preferred work environment: ${q6}`,
            `First priority when choosing a job: ${q7}`,
        ].join('; ');
        setResponse(response + responses);
        finalResponses = response + responses;
    }

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        navigate('/results-basic');
    }

    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    const renderButtons = (options: string[], questionNumber: number) => {
        const selectedValue = [q1, q2, q3, q4, q5, q6, q7][questionNumber - 1];
    
        return (
            <div className="buttonGroup">
                {options.map((option) => (
                    <Button
                        key={option}
                        onClick={() => updateAnswer(option, questionNumber)}
                        className={selectedValue === option ? 'selected-button' : 'unselected-button'}
                    >
                        {option}
                    </Button>
                ))}
            </div>
        );
    };
    

    return (
        <div>
            {completion && <Confetti width={window.innerWidth} height={document.body.scrollHeight} />}
            <div className="home-button">
                <button onClick={() => navigate('/')}>Go to Home</button>
                <div className="basic-header">
                    <h1>Basic Questions</h1>
                </div>
            </div>
            <div className={progress === 100 ? 'progress-section-b-completed' : 'progress-section-b'}>
                <text>Progress: </text>
                <progress value={progress} max={100} />
            </div>
            <Form.Group className="BQlist">
                <Container className="QuesContainer">
                    {[q1Arr, q2Arr, q3Arr, q4Arr, q5Arr, q6Arr, q7Arr].map((options, idx) => (
                        <div key={`question-${idx + 1}`}>
                            <h3>Question {idx + 1} out of 7</h3>
                            <div className="question">
                                <h3>{[`Which one of these best describes you?`, `What do you find as your favorite subject?`, `What do you enjoy doing the most?`, `Which role do you find yourself in a job?`, `What best describes yourself?`, `What type of work environment would you thrive in?`, `What is your first priority in a job?`][idx]}</h3>
                                <Row className='quesRow'>
                                    <Col>{renderButtons(options, idx + 1)}</Col>
                                    <Col>
                                        <img
                                            src={[q1pic, q2pic, q3pic, q4pic, q5pic, q6pic, q7pic][idx]}
                                            alt={`Question ${idx + 1}`}
                                            className="question-image"
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    ))}
                </Container>
            </Form.Group>
            <Popup
                trigger={
                    <div className="submitButton">
                        <button onClick={submitResults} disabled={!completion}>
                            Get Your Results Here!
                        </button>
                    </div>
                }
                position="top center"
            >
                <div className="popup-b">
                    <h1 className="popup-header-b">Almost Ready!</h1>
                    <p className="popup-desc-b">
                        Our questions use ChatGPT to maximize the accuracy of our assessment and pick out the perfect
                        career for you. Please input your API key here to ensure ChatGPT can utilize your results.
                    </p>
                    <Form>
                        <Form.Control
                            type="password"
                            placeholder="Insert API Key Here"
                            onChange={changeKey}
                        />
                        <br />
                        <div className="popup-buttons">
                            <Button className="submit-button" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <br />
                            <Button className="skip-button" onClick={() => navigate('/results-basic')}>
                                Skip
                            </Button>
                        </div>
                    </Form>
                </div>
            </Popup>
        </div>
    );
}
