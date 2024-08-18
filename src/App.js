import { useEffect, useState } from "react";
import "./App.css";

function App() {
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





  const questions = [
    {
      text: "What is the capital of America?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
        { id: 4, text: "Los Angeles", isCorrect: false },
      ],
    },
    {
      text: "Solve the following puzzle?",
      image: "/assets/fruit1.jpg",
      options: [
        { id: 0, text: "100", isCorrect: false },
        { id: 1, text: "250", isCorrect: false },
        { id: 2, text: "300", isCorrect: false },
        { id: 3, text: "175", isCorrect: true },
        { id: 4, text: "500", isCorrect: false },
      ],
    },
    {
      text: "Solve the following puzzle?",
      image: "https://i.ytimg.com/vi/4cOzYxNz7Cg/maxresdefault.jpg",
      options: [
        { id: 0, text: "1000", isCorrect: false },
        { id: 1, text: "2000", isCorrect: false },
        { id: 2, text: "3000", isCorrect: false },
        { id: 3, text: "4000", isCorrect: true },
        { id: 4, text: "5000", isCorrect: false },
      ],
    },
    {
      text: "Solve the following puzzle?",
      image:
        "https://winthropdc.wordpress.com/wp-content/uploads/2020/08/clock-calculator-lightbulb-puzzle.jpg",
      options: [
        { id: 0, text: "50", isCorrect: false },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "25", isCorrect: false },
        { id: 3, text: "32", isCorrect: true },
        { id: 4, text: "22", isCorrect: false },
      ],
    },

    // Added fruit puzzle question
    // {
    //   text: "If 🍎 + 🍎 + 🍎 + 🍎 = 1000, 🍌 + 🍒 + 🍒 = 500, what is 🍎 + 🍌 + 🍒 + 🍍?",
    //   image: "",
    //   options: [
    //     { id: 0, text: "1500", isCorrect: true },
    //     { id: 1, text: "1200", isCorrect: false },
    //     { id: 2, text: "1000", isCorrect: false },
    //     { id: 3, text: "800", isCorrect: false },
    //     { id: 4, text: "2000", isCorrect: false },
    //   ],
    //   fruits: {
    //     apple: 250, // 🍎
    //     banana: 200, // 🍌
    //     cherry: 150, // 🍒
    //     pineapple: 400, // 🍍
    //   },
    //   correctAnswer: 1500, // Calculation of apple + banana + cherry + pineapple
    // },

    // Question with Image
    {
      text: "What fruit is this?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOr6r3T7sWdXHSO69hb_oaryV2RCF2OEo2g&s",
      options: [
        { id: 0, text: "Apple", isCorrect: true },
        { id: 1, text: "Banana", isCorrect: false },
        { id: 2, text: "Mango", isCorrect: false },
        { id: 3, text: "Pineapple", isCorrect: false },
        { id: 3, text: "Potato", isCorrect: false },
      ],
    },
    {
      text: "Where is the Golden Gate Bridge?",
      image:
        "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg",
      options: [
        { id: 0, text: "Arizona", isCorrect: false },
        { id: 1, text: "Florida", isCorrect: false },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "California", isCorrect: true },
        { id: 4, text: "Denver", isCorrect: false },
      ],
    },
  ];


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
    <div className="App">
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
    </div>
  );
}

export default App;
