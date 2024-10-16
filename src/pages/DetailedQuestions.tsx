import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './DetailedQuestions.css';
//import { HashRouter, Route } from 'react-router-dom';

export function DetailedQuestions():JSX.Element {
    const navigate = useNavigate();
    const [ans1, setAns1] = useState<string>("Input Answer");
    function UpdateAns1(event: React.ChangeEvent<HTMLInputElement>){
        setAns1(event.target.value);
      }
    

      const [ans2, setAns2] = useState<string>("Input Answer");
    function UpdateAns2(event: React.ChangeEvent<HTMLInputElement>){
        setAns2(event.target.value);
      }

      const [ans3, setAns3] = useState<string>("Input Answer");
    function UpdateAns3(event: React.ChangeEvent<HTMLInputElement>){
        setAns3(event.target.value);
      }
      const [ans4, setAns4] = useState<string>("Input Answer");
    function UpdateAns4(event: React.ChangeEvent<HTMLInputElement>){
        setAns4(event.target.value);
      }
      const [ans5, setAns5] = useState<string>("Input Answer");
    function UpdateAns5(event: React.ChangeEvent<HTMLInputElement>){
        setAns5(event.target.value);
      }
      const [ans6, setAns6] = useState<string>("Input Answer");
    function UpdateAns6(event: React.ChangeEvent<HTMLInputElement>){
        setAns6(event.target.value);
      }
      const [ans7, setAns7] = useState<string>("Input Answer");
    function UpdateAns7(event: React.ChangeEvent<HTMLInputElement>){
        setAns7(event.target.value);
      }
    return <div className='detailedQuestions'>
      <header className='compass'>
        <Form.Group className='top'>
        <Button onClick={() => navigate('/detailed-questions')}>DDetailed Questions</Button>
        <Button onClick={() => navigate('/')}>HHome</Button>
        <Button onClick={() => navigate('/basic-questions')}>DBasic Questions</Button>
        </Form.Group>
      </header>
        <div className='ListOQues'>
        <Form.Group className="DetailedQues" controlId="DQlist">
          <text>
            Q1: If you were to be given an elephant as well as access to take care of the elephant, How would you use the elephant for business purposes?
          </text>
          <Form.Control
            className='textbox'
            value={ans1}
            onChange={UpdateAns1}
            role="textbox"
            />
            <text>
            Q2: Lets say that you work with a part of government which plant trees. The government wants to make planting trees efficient and healthy for the environment as well as gather funding from wealthy investors. What would you and a group you are leading going to do?
            </text>
          <Form.Control
            className='textbox'
            value={ans2}
            onChange={UpdateAns2}
            role="textbox"
            />

            <text>
              Q3: Lets say that there was a company that is having a lawsuit because one of their products they had been selling had been causing a new form of cancer because of the new type of ink that they put in their pens. What do you see yourself doing in the courtroom?
            </text>
            <Form.Control
              className='textbox'
              value={ans3}
              onChange={UpdateAns3}
              role="textbox"
              />

            <text>
            Q4: Lets say that you are a manager. You start to see that during this quartile the amount of work that is being completed per week is decreasing. What would you look at and question to make sure that the efficiency is staying the same and explain why.
            </text>
            <Form.Control
              className='textbox'
              value={ans4}
              onChange={UpdateAns4}
              role="textbox"
              />

            <text>
            Q5: Lets say that there is a group of people who are getting taken advantage of, without their permission, and there is a way that would help these people already known but, it costs lots of money and attention. If you were a manager and you and your team were tasked with helping these people what would you do and why?
            </text>
            <Form.Control
              className='textbox'
              value={ans5}
              onChange={UpdateAns5}
              role="textbox"
              />

            <text>
            Q6: Lets say that you are one of the managers inside of a company that works on retrieving golf balls from inside of ponds and lakes on golf courses. What way would you work on this job?
            </text>
            <Form.Control
              className='textbox'
              value={ans6}
              onChange={UpdateAns6}
              role="textbox"
              />

            <text>
            Q7: You are a city planner and there is a well known orchestra that is going to play in your city but the issue is that there isn't a venue big enough to hold the orchestra. How would you allow a large audience to hear the music including in-person.
            </text>
            <Form.Control
              className='textbox'
              value={ans7}
              onChange={UpdateAns7}
              role="textbox"
              />
      </Form.Group>
        </div>
        

        <div className='submitButton'>
        <Button >Submit answers</Button>
        </div>
    </div>;
}