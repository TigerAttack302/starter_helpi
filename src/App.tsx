import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BasicQuestions } from './pages/BasicQuestions';
import { DetailedQuestions } from './pages/DetailedQuestions';
import { ResultsDetailed } from './pages/Results-Detailed';
import { ResultsBasic } from './pages/Results-Basic';
import { ScrollToTop } from './Components/ScrollToTop';

import './App.css';

export const DQResponses:string = "Given the questions and the reponses to the questions generate a career for the individual.";

function App() {

  return (
    <div className="App">
      <HashRouter>
      <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic-questions" element={<BasicQuestions/>}/>
        <Route path="/detailed-questions" element={<DetailedQuestions/>}/>
        <Route path="/results-detailed" element={<ResultsDetailed/>}/>
        <Route path="/results-basic" element={<ResultsBasic/>}/>
        </Routes>
      </HashRouter>      
    </div>
  );
}
export default App;