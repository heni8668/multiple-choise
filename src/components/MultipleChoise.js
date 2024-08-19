import React, { useEffect, useState } from 'react'

import questions from "../api/questions";
import './multipleChoise.css'

const MultipleChoise = () => {
     const [score, setScore] = useState(0);
     const [showResults, setShowResults] = useState(false);
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

     const [startTime, setStartTime] = useState(null);
     const [timeTaken, setTimeTaken] = useState(null);

     useEffect(() => {
       if (startTime === null) {
         setStartTime(performance.now()); // Start timing when the component mounts
       }
     }, [startTime]);

     // a possible answer was clicked
     const optionClicked = (isCorrect) => {
       if (isCorrect) {
         setScore(score + 1);
       }

       if (currentQuestionIndex + 1 < questions.length) {
         setCurrentQuestionIndex(currentQuestionIndex + 1);
       } else {
         const duration = performance.now() - startTime; // Calculate the duration
         setTimeTaken(duration);
         setShowResults(true);
       }
     };

     //reset the game and back to default
     const restartGame = () => {
       setScore(0);
       setCurrentQuestionIndex(0);
       setShowResults(false);
       setTimeTaken(null);
       setStartTime(performance.now());
     };

     const formatTimeTaken = (duration) => {
       const minutes = Math.floor(duration / 60000);
       const seconds = Math.floor((duration % 60000) / 1000);
       const microseconds = Math.floor((duration % 1000) * 1000);

       return `${minutes} minutes, ${seconds} seconds, and ${microseconds} microseconds`;
     };
  return (
    <>
      {/* Header */}
      <h1 className="title">Welcome To Online Question and Answer</h1>

      {/* Show the final result or show the questions conditionally */}

      {showResults ? (
        <div className="final-results">
          <h2>Final Score: {score}</h2>
          <h3>
            Congratulations, you answered {score} out of {questions.length}{" "}
            questions correctly!
          </h3>
          {timeTaken && <h3>Time taken: {formatTimeTaken(timeTaken)}</h3>}
          <button onClick={() => restartGame()}>Play Again</button>
        </div>
      ) : (
        // question card
        <div className="question-card">
          {/* current question */}
          <h2>Question: {currentQuestionIndex + 1}</h2>
          <h3 className="question-text">
            {questions[currentQuestionIndex].text}
          </h3>

          {/* list of possible answer */}
          <div className="question-content">
            {questions && (
              <img
                src={questions[currentQuestionIndex].image}
                alt=""
                className="question-image"
              />
            )}

            <div className="answers">
              {questions[currentQuestionIndex].options.map((option) => {
                return (
                  <div className="choice" key={option.id}>
                    <span>{String.fromCharCode(65 + option.id)}.</span>
                    <li
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MultipleChoise