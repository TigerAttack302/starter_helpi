import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Confetti from 'react-confetti'

import { Col, Container, Form, Row } from 'react-bootstrap';
import full from './DetailedQuestionPictures/images.jpg';
import principles from './DetailedQuestionPictures/download.jpg';
import inspire from './DetailedQuestionPictures/inspirejpg.jpg';
import strong from './DetailedQuestionPictures/stronk.jpg';
import earth from './DetailedQuestionPictures/earth.jpg';
import success from './DetailedQuestionPictures/images (1).jpg';
import goal from './DetailedQuestionPictures/goal.png';

import './DetailedQuestions.css';


let finalResponses: string;
export function getResponse(){
    return finalResponses;
}
export function DetailedQuestions():JSX.Element {
    const navigate = useNavigate();
    const [progress, setProgress] = useState<number>(0);
    const [completion, setCompletion] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("Given the following questions and answers, what is the best career for me? ");

    const [ans1, setAns1] = useState<string>("");
    function UpdateAns1(event: React.ChangeEvent<HTMLInputElement>){
        setAns1(event.target.value);
        if (!ans1) {
          setProgress(progress+14);
        }
        updateCompletion();
    }

    const [ans2, setAns2] = useState<string>("");
    function UpdateAns2(event: React.ChangeEvent<HTMLInputElement>){
        setAns2(event.target.value);
        if (!ans2) {
          setProgress(progress+14);
        }
        updateCompletion();
    }

    const [ans3, setAns3] = useState<string>("");
    function UpdateAns3(event: React.ChangeEvent<HTMLInputElement>){
        setAns3(event.target.value);
        if (!ans3) {
          setProgress(progress+14);
        }
        updateCompletion();
    }
    const [ans4, setAns4] = useState<string>("");
    function UpdateAns4(event: React.ChangeEvent<HTMLInputElement>){
        setAns4(event.target.value);
        if (!ans4) {
          setProgress(progress+14);
        }
        updateCompletion();
    }
    const [ans5, setAns5] = useState<string>("");
    function UpdateAns5(event: React.ChangeEvent<HTMLInputElement>){
        setAns5(event.target.value);
        if (!ans5) {
          setProgress(progress+14);
        }
        updateCompletion();
    }
    const [ans6, setAns6] = useState<string>("");
    function UpdateAns6(event: React.ChangeEvent<HTMLInputElement>){
        setAns6(event.target.value);
        if (!ans6) {
          setProgress(progress+15);
        }
        updateCompletion();
    }
    const [ans7, setAns7] = useState<string>("");
    function UpdateAns7(event: React.ChangeEvent<HTMLInputElement>){
        setAns7(event.target.value);
        if (!ans7) {
          setProgress(progress+15);
        }
        updateCompletion();
    }
      
    function updateCompletion() {
      if (progress >= 85) {
          setCompletion(true);
      }
    }

    function submitResults() {
      setResponse(response
          + "What activities or tasks make you feel the most energized and fulfilled, and why? " + ans1
          + "; What are your top three strengths or skills, and how do you apply them in your daily life? " + ans2
          + "; What are the values or principles that are most important to you in a work environment? " + ans3
          + "; What types of challenges or problems do you enjoy solving, and what makes them appealing? " + ans4
          + "; What kind of impact do you want your work to have on others or the world? " + ans5
          + "; What are your financial goals and lifestyle preferences, and how do they influence your career choices? " + ans6
          + "; How do you define success in your career, and what will make you feel you’ve achieved it? " + ans7);
      finalResponses = (response
      + "What activities or tasks make you feel the most energized and fulfilled, and why? " + ans1
      + "; What are your top three strengths or skills, and how do you apply them in your daily life? " + ans2
      + "; What are the values or principles that are most important to you in a work environment? " + ans3
      + "; What types of challenges or problems do you enjoy solving, and what makes them appealing? " + ans4
      + "; What kind of impact do you want your work to have on others or the world? " + ans5
      + "; What are your financial goals and lifestyle preferences, and how do they influence your career choices? " + ans6
      + "; How do you define success in your career, and what will make you feel you’ve achieved it? " + ans7);
      navigate('/results-detailed');
  }
    return (
    <div className='detailedQuestions'>
      {completion && <Confetti width={window.innerWidth} height={document.body.scrollHeight}/>}
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        <div className='ListOQues'>
          <h1 className='title'>Detailed Questions
            <div className='progress-section-d'>
                <text>Progress:  </text>
                <progress value={progress} max={100}/>
            </div>
          </h1>
        <Form.Group className="DetailedQues" controlId="DQlist">
        <Container className='lowercontainer'>
        <hr/>
          <Row>
          <text>
          Q1. What activities or tasks make you feel the most energized and fulfilled, and why?
          </text>
                <Col>
          <Form.Control
            className='textbox'
            value={ans1}
            onChange={UpdateAns1}
            role="textbox"
            placeholder='Input Text'
            as="textarea"
            maxLength={450}
            />
            <text className='textboxIndicator'>{ans1.length}/450</text>
            </Col>
                <Col>
                <img
                  src={full}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
              </Row>
            <hr/>
            <text>
            Q2. What are your top three strengths or skills, and how do you apply them in your daily life?
            </text>
              <Row>
                <Col>
                  <Form.Control
                    className='textbox'
                    as="textarea"
                    value={ans2}
                    onChange={UpdateAns2}
                    role="textbox"
                    placeholder='Input Text'
                    maxLength={450}
                  />
                  <text className='textboxIndicator'>{ans2.length}/450</text>
                </Col>
                <Col>
                <img
                  src={strong}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
              </Row>
          
          <hr />
            <text>
            Q3. What are the values or principles that are most important to you in a work environment?
            </text>
            <Row>
                <Col>
            <Form.Control
              as="textarea"
              className='textbox'
              value={ans3}
              onChange={UpdateAns3}
              placeholder='Input Text'
              maxLength={450}
              />
              <text className='textboxIndicator'>{ans3.length}/450</text>
            </Col>
                <Col>
                <img
                  src={principles}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
            </Row>
            <hr/>
            <text>
            Q4. What types of challenges or problems do you enjoy solving, and what makes them appealing?
            </text>
            <Row>
                <Col>
            <Form.Control
              className='textbox'
              value={ans4}
              onChange={UpdateAns4}
              as="textarea"
              placeholder='Input Text'
              maxLength={450}
              />
              <text className='textboxIndicator'>{ans4.length}/450</text>
              </Col>
                <Col>
                <img
                  src={inspire}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
            </Row>
            <hr/>
            <text>
            Q5. What kind of impact do you want your work to have on others or the world?
            </text>
            <Row>
                <Col>
            <Form.Control
              className='textbox'
              value={ans5}
              onChange={UpdateAns5}
              role="textbox"
              placeholder='Input Text'
              as="textarea"
              maxLength={450}
              />
              <text className='textboxIndicator'>{ans5.length}/450</text>
              </Col>
                <Col>
                <img
                  src={earth}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
            </Row>
            <hr/>
            <text>
            Q6. What are your financial goals and lifestyle preferences, and how do they influence your career choices?
            </text>
            <Row>
                <Col>
            <Form.Control
              className='textbox'
              value={ans6}
              onChange={UpdateAns6}
              role="textbox"
              as="textarea"
              placeholder='Input Text'
              maxLength={450}
              />
              <text className='textboxIndicator'>{ans6.length}/450</text>
              </Col>
                <Col>
                <img
                  src={goal}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
            </Row>
            <hr/>
            <text>
            Q7. How do you define success in your career, and what will make you feel you’ve achieved it?
            </text>
            <Row>
                <Col>
            <Form.Control
              className='textbox'
              value={ans7}
              onChange={UpdateAns7}
              role="textbox"
              as="textarea"
              placeholder='Input Text'
              maxLength={450}
              />
              <text className='textboxIndicator'>{ans7.length}/450</text>
              </Col>
                <Col>
                <img
                  src={success}
                  alt="img not found"
                  className='IMG'
                />
                </Col> 
            </Row>
          </Container>
      </Form.Group>
        </div>
        

        <div className='submitButton'>
        <button onClick={submitResults} disabled={!completion}>Get Your Results Here!</button>
        </div>
        <hr/>
    </div>
)}
