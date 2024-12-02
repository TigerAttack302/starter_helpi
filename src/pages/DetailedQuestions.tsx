import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import full from './DetailedQuestionPictures/images.jpg';
import principles from './DetailedQuestionPictures/download.jpg';
import inspire from './DetailedQuestionPictures/inspirejpg.jpg';
import strong from './DetailedQuestionPictures/stronk.jpg';
import earth from './DetailedQuestionPictures/earth.jpg';
import success from './DetailedQuestionPictures/images (1).jpg';
import goal from './DetailedQuestionPictures/goal.png';

import './DetailedQuestions.css';
import Popup from 'reactjs-popup';


let finalResponses: string;
export function getResponse(){
    return finalResponses;
}

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
export let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function DetailedQuestions():JSX.Element {
    const navigate = useNavigate();
    const [progress, setProgress] = useState<number>(0);
    const [completion, setCompletion] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("Given the following questions and answers, what is the best career for me? If the answers don't make sense, ask the user to retry the quiz. ");

    const [ans1, setAns1] = useState<string>("");
    function UpdateAns1(event: React.ChangeEvent<HTMLInputElement>){
      if (ans1 && !event.target.value) {
        setProgress(progress-14);
      } else if (!ans1 && event.target.value) {
        setProgress(progress+14);
      }
      setAns1(event.target.value);
    }

    const [ans2, setAns2] = useState<string>("");
    function UpdateAns2(event: React.ChangeEvent<HTMLInputElement>){
      if (ans2 && !event.target.value) {
        setProgress(progress-14);
      } else if (!ans2 && event.target.value) {
        setProgress(progress+14);
      }
      setAns2(event.target.value);
    }

    const [ans3, setAns3] = useState<string>("");
    function UpdateAns3(event: React.ChangeEvent<HTMLInputElement>){
      if (ans3 && !event.target.value) {
        setProgress(progress-14);
      } else if (!ans3 && event.target.value) {
        setProgress(progress+14);
      }
      setAns3(event.target.value);
    }
    const [ans4, setAns4] = useState<string>("");
    function UpdateAns4(event: React.ChangeEvent<HTMLInputElement>){
      if (ans4 && !event.target.value) {
        setProgress(progress-14);
      } else if (!ans4 && event.target.value) {
        setProgress(progress+14);
      }
      setAns4(event.target.value);
    }
    const [ans5, setAns5] = useState<string>("");
    function UpdateAns5(event: React.ChangeEvent<HTMLInputElement>){
      if (ans5 && !event.target.value) {
        setProgress(progress-14);
      } else if (!ans5 && event.target.value) {
        setProgress(progress+14);
      }
      setAns5(event.target.value);
    }
    const [ans6, setAns6] = useState<string>("");
    function UpdateAns6(event: React.ChangeEvent<HTMLInputElement>){
      if (ans6 && !event.target.value) {
        setProgress(progress-15);
      } else if (!ans6 && event.target.value) {
        setProgress(progress+15);
      }
      setAns6(event.target.value);
    }
    const [ans7, setAns7] = useState<string>("");
    function UpdateAns7(event: React.ChangeEvent<HTMLInputElement>){
      if (ans7 && !event.target.value) {
        setProgress(progress-15);
      } else if (!ans7 && event.target.value) {
        setProgress(progress+15);
      }
      setAns7(event.target.value);
    }
      
    useEffect(() => {
      if (progress === 100) {
        setCompletion(true);
      } else {
        setCompletion(false);
      }
    }, [progress]);

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
  }

  
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    navigate('/results-detailed');
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  let progressSectionClassName = progress === 100 ? 'progress-section-d-completed' : 'progress-section-d';

  return (

    <div className='detailedQuestions'>
            <div className='home-button'>
                <button onClick={() => navigate('/')}>Go to Home</button>
                <div className='detailed-header'><h1>Detailed Questions</h1></div>
            </div>
        <div className='ListOQues'>
            <div className={progressSectionClassName}>
                <text>Progress:  </text>
                <progress value={progress} max={100}/>
            </div>
        <Form.Group className="DetailedQues" controlId="DQlist">
        <Container className='lowercontainer'>
        <hr/>
          <text>
          Q1. What activities or tasks make you feel the most energized and fulfilled, and why?
          </text>
          <Row>
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
        <Popup trigger={<div className='submitButton'>
          <button onClick={submitResults} disabled={!completion}>Get Your Results Here!</button></div>}
          position="top center">
          <div className='popup'>
            <h1 className='popup-header'>Almost Ready!</h1>
            <p className='popup-desc'>
              Our questions use ChatGPT in order to maximize the accuracy of our assessment and to pick out the perfect
              career for you. Make sure to input your API key here to ensure ChatGPT can utilize
              your results.
            </p>
            <Form>
              <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
              <br/>
              <div className='popup-buttons'>
                <Button className="submit-button" onClick={handleSubmit}>Submit</Button>
                <br></br>
                <Button className='skip-button' onClick={() => navigate('/results-detailed')}>Skip</Button>
              </div>
            </Form>
            <br/>
            <p>**Do not hit skip unless you've already submitted your API key this session</p>
          </div>
        </Popup>
    </div>
)}
