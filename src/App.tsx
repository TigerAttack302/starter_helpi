import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BasicQuestions } from './pages/BasicQuestions';
import { DetailedQuestions } from './pages/DetailedQuestions';
import { Results } from './pages/Results';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
export let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic-questions" element={<BasicQuestions/>}/>
        <Route path="/detailed-questions" element={<DetailedQuestions/>}/>
        <Route path="/results" element={<Results/>}/>
        </Routes>
      </HashRouter>
      <footer className='footer'>
        <div className='row-api'>
          <div className='column-api'>
            <p>
              <br/>
              Our questions use ChatGPT in order to maximize the accuracy of our assessment and to pick out the perfect
              career for you. Make sure to input your API key before taking our assessment to ensure ChatGPT can utilize
              your results.
            </p>
          </div>
          <div className='column-api-input'>
            <Form>
              <Form.Label>API Key:</Form.Label>
              <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
              <br/>
              <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
            </Form>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
export default App;