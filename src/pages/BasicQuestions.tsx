import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Button, Form } from 'react-bootstrap';

export function BasicQuestions(): JSX.Element {
    const navigate = useNavigate();

    const containerStyle = {
      textAlign: 'left' as const, 
      margin: '20px', 
  };

  const questionStyle = {
      marginBottom: '20px', 
  };

  const buttonGroupStyle = {
      display: 'flex',
      flexDirection: 'column' as const, 
      gap: '10px', 
      marginBottom: '30px', 
  };

  const buttonStyle = {
      maxWidth: '500px', 
      padding: '8px 20px', 
  };

    return (
        <div style={containerStyle}>
            <button onClick={() => navigate('/')}>Go to Home</button>
            <h1>Basic Questions</h1>
            <h2>Progress</h2>
            <div className="Questions">
                <div style={questionStyle}>
                    <h3>Question 1 out of 7</h3>
                    <h3>Which one of these best describes you?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>High School Student</button>
                        <button type="button" style={buttonStyle}>College Student</button>
                        <button type="button" style={buttonStyle}>Graduated</button>
                        <button type="button" style={buttonStyle}>None of the Above</button>
                    </div>
                </div>

                <div style={questionStyle}>
                    <h3>Question 2 out of 7</h3>
                    <h3>What do you find as your favorite subject?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>Math/Science</button>
                        <button type="button" style={buttonStyle}>Arts/Creative Thinking</button>
                        <button type="button" style={buttonStyle}>Computer Science</button>
                        <button type="button" style={buttonStyle}>Business/Economics</button>
                    </div>
                </div>

                <div style={questionStyle}>
                    <h3>Question 3 of 7</h3>
                    <h3>What do you enjoy doing the most?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>Solving complex problems</button>
                        <button type="button" style={buttonStyle}>Helping Others</button>
                        <button type="button" style={buttonStyle}>Designing, Creative Thinking</button>
                        <button type="button" style={buttonStyle}>Analyzing data</button>
                    </div>
                </div>

                <div style={questionStyle}>
                    <h3>Question 4 out of 7</h3>
                    <h3>Which role do you find yourself in a job?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>Leading/Managing</button>
                        <button type="button" style={buttonStyle}>Providing Support</button>
                        <button type="button" style={buttonStyle}>Innovating new ideas</button>
                        <button type="button" style={buttonStyle}>Communication</button>
                    </div>
                </div>

                <div style={questionStyle}>
                    <h3>Question 5 out of 7</h3>
                    <h3>What Best Describes yourself?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>Hardworker</button>
                        <button type="button" style={buttonStyle}>Smart</button>
                        <button type="button" style={buttonStyle}>Accountable</button>
                        <button type="button" style={buttonStyle}>Versatile</button>
                    </div>
                </div>

                <div style={questionStyle}>
                    <h3>Question 6 out of 7</h3>
                    <h3>What type of work environment would you thrive in?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>Collaborative team setting</button>
                        <button type="button" style={buttonStyle}>Quiet and independent</button>
                        <button type="button" style={buttonStyle}>Structured/Organized setting</button>
                        <button type="button" style={buttonStyle}>Fast/Dynamic</button>
                    </div>
                </div>

                <div style={questionStyle}>
                    <h3>Question 7 out of 7</h3>
                    <h3>What is your first priority in a job?</h3>
                    <div style={buttonGroupStyle}>
                        <button type="button" style={buttonStyle}>Career Development</button>
                        <button type="button" style={buttonStyle}>Salary/Benefits</button>
                        <button type="button" style={buttonStyle}>Work Environment</button>
                        <button type="button" style={buttonStyle}>The company's reputation</button>
                    </div>
                </div>
            </div>
            <p>This is the content of the Basic Questions page.</p>
        </div>
    );
}
