import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'

import './BasicQuestions.css';

import q1pic from './BasicQuestionsPictures/early-college-high-school-placeholder.jpg';
import q2pic from './BasicQuestionsPictures/college-classes.webp';
import q3pic from './BasicQuestionsPictures/images.jpg';
import q4pic from './BasicQuestionsPictures/shutterstock_1464234134-1024x684.jpg';
import q5pic from './BasicQuestionsPictures/images (1).jpg';
import q6pic from './BasicQuestionsPictures/20230729_BLP505.webp';
import q7pic from './BasicQuestionsPictures/1703323776064.jpg';

let finalResponses: string;
export function getResponse(){
    return finalResponses;
}

export function BasicQuestions(): JSX.Element {
    const navigate = useNavigate();
    const [progress, setProgress] = useState<number>(0);
    const [completion, setCompletion] = useState<boolean>(false);
    const [q1, setq1] = useState<string>("");
    const [q2, setq2] = useState<string>("");
    const [q3, setq3] = useState<string>("");
    const [q4, setq4] = useState<string>("");
    const [q5, setq5] = useState<string>("");
    const [q6, setq6] = useState<string>("");
    const [q7, setq7] = useState<string>("");
    const q1Arr = ["High School Student", "College Student", "Graduated", "None of the Above"];
    const q2Arr = ["Math/Science","Arts/Creative Thinking", "Computer Science", "Business/Economics"];
    const q3Arr = ["Solving complex problems","Helping Others","Designing / Creative Thinking", "Analyzing data"];
    const q4Arr = ["Leading/Managing", "Providing support", "Innovating new ideas", "Communication"];
    const q5Arr = ["Hardworker", "Smart", "Accountable", "Versatile"];
    const q6Arr = ["Collaborative team setting", "Quiet and independent", "Structures / Organized setting", "Fast / Dynamic setting"];
    const q7Arr = ["Career Development", "Salary / Benefits", "Work Environment", "Company's Reputation"];
    const [response, setResponse] = useState<string>("Given the following prompts and answers, what is the best career for me? ");


    function updateAnswer1(a: string) {
        if (!q1) {
            setProgress(progress+14);
            updateCompletion();
        }
        setq1(a);
    }
    function updateAnswer2(a: string) {
        if (!q2) {
            setProgress(progress+14);
            updateCompletion();
        }
        setq2(a);
    }
    function updateAnswer3(a: string) {
        if (!q3) {
            setProgress(progress+14);
            updateCompletion();
        }
        setq3(a);
    }
    function updateAnswer4(a: string) {
        if (!q4) {
            setProgress(progress+14);
            updateCompletion();
        }
        setq4(a);
    }
    function updateAnswer5(a: string) {
        if (!q5) {
            setProgress(progress+14);
            updateCompletion();
        }
        setq5(a);
    }
    function updateAnswer6(a: string) {
        if (!q6) {
            setProgress(progress+15);
            updateCompletion();
        }
        setq6(a);
    }
    function updateAnswer7(a: string) {
        if (!q7) {
            setProgress(progress+15);
            updateCompletion();
        }
        setq7(a);
    }

    function updateCompletion() {
        if (progress >= 85) {
            setCompletion(true);
        }
    }

    function submitResults() {
        setResponse(response
            + "Level of education: " + q1
            + "; Favorite subject: " + q2
            + "; I enjoy: " + q3
            + "; Preferred job role: " + q4
            + "; I'd describe myself as: " + q5
            + "; Preferred work environment: " + q6
            + "; First priority when choosing a job: " + q7);
        finalResponses = (
            response
            + "Level of education: " + q1
            + "; Favorite subject: " + q2
            + "; I enjoy: " + q3
            + "; Preferred job role: " + q4
            + "; I'd describe myself as: " + q5
            + "; Preferred work environment: " + q6
            + "; First priority when choosing a job: " + q7);
        navigate('/results-basic');
    }

    const progressSectionClassName = progress === 100 ? 'progress-section-b-completed' : 'progress-section-b';

    return (
        <div>
            {completion && <Confetti width={window.innerWidth} height={document.body.scrollHeight}/>}
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Go to Home</button>
                <div className='basic-header'><h1>Basic Questions</h1></div>
            </div>
            <div className={progressSectionClassName}>
                    <text>Progress:  </text>
                <progress value={progress} max={100}/>
            </div>
        <div>

    <h3>Question 1 out of 7</h3>
    <div className="question">
    <h3>Which one of these best describes you?</h3>
    <img src={q1pic} alt="Question 1" className="question-image" />
    <div className="buttonGroup">
        {q1Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q1"
                onChange={() => updateAnswer1(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

<h3>Question 2 out of 7</h3>
<div className="question">
    <h3>What do you find as your favorite subject?</h3>
    <img src={q2pic} alt="Question 2" className="question-image" />
    <div className="buttonGroup">
        {q2Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q2"
                onChange={() => updateAnswer2(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

<h3>Question 3 of 7</h3>
<div className="question">
    <h3>What do you enjoy doing the most?</h3>
    <img src={q3pic} alt="Question 3" className="question-image" />
    <div className="buttonGroup">
        {q3Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q3"
                onChange={() => updateAnswer3(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

<h3>Question 4 out of 7</h3>
<div className="question">
    <h3>Which role do you find yourself in a job?</h3>
    <img src={q4pic} alt="Question 4" className="question-image" />
    <div className="buttonGroup">
        {q4Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q4"
                onChange={() => updateAnswer4(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

<h3>Question 5 out of 7</h3>
<div className="question">
    <h3>What best describes yourself?</h3>
    <img src={q5pic} alt="Question 5" className="question-image" />
    <div className="buttonGroup">
        {q5Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q5"
                onChange={() => updateAnswer5(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

<h3>Question 6 out of 7</h3>
<div className="question">
    <h3>What type of work environment would you thrive in?</h3>
    <img src={q6pic} alt="Question 6" className="question-image" />
    <div className="buttonGroup">
        {q6Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q6"
                onChange={() => updateAnswer6(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

<h3>Question 7 out of 7</h3>
<div className="question">
    <h3>What is your first priority in a job?</h3>
    <img src={q7pic} alt="Question 7" className="question-image" />
    <div className="buttonGroup">
        {q7Arr.map((a) => (
            <Form.Check
                type="radio"
                name="q7"
                onChange={() => updateAnswer7(a)}
                label={a}
                key={a}
                value={a}
            />
        ))}
    </div>
</div>

            </div>
            <button onClick={submitResults} disabled={!completion}>Get Your Results Here!</button>
            <hr/>
        </div>
    );
}
