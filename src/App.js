import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
      image: "https://i.ytimg.com/vi/4cOzYxNz7Cg/maxresdefault.jpg",
      options: [
        { id: 0, text: "1000", isCorrect: false },
        { id: 1, text: "2000", isCorrect: false },
        { id: 2, text: "3000", isCorrect: false },
        { id: 3, text: "4000", isCorrect: true },
        { id: 4, text: "5000", isCorrect: false },
      ],
    },

    // Added fruit puzzle question
    {
      text: "If 🍎 + 🍎 + 🍎 + 🍎 = 1000, 🍌 + 🍒 + 🍒 = 500, what is 🍎 + 🍌 + 🍒 + 🍍?",
      image: "",
      options: [
        { id: 0, text: "1500", isCorrect: true },
        { id: 1, text: "1200", isCorrect: false },
        { id: 2, text: "1000", isCorrect: false },
        { id: 3, text: "800", isCorrect: false },
        { id: 4, text: "2000", isCorrect: false },
      ],
      fruits: {
        apple: 250, // 🍎
        banana: 200, // 🍌
        cherry: 150, // 🍒
        pineapple: 400, // 🍍
      },
      correctAnswer: 1500, // Calculation of apple + banana + cherry + pineapple
    },
    // Fruit Puzzle 2
    {
      text: "If 🍇 + 🍇 + 🍇 + 🍇 = 800, 🍉 + 🍇 + 🍇 = 600, what is 🍉 + 🍇 + 🍏 + 🍍?",
      options: [
        { id: 0, text: "1000", isCorrect: false },
        { id: 1, text: "1100", isCorrect: true },
        { id: 2, text: "900", isCorrect: false },
        { id: 3, text: "1200", isCorrect: false },
        { id: 4, text: "1800", isCorrect: false },
      ],
      fruits: {
        grape: 200, // 🍇
        watermelon: 400, // 🍉
        apple: 250, // 🍏
        pineapple: 250, // 🍍
      },
      correctAnswer: 1100,
    },
    // Fruit Puzzle 3
    {
      text: "If 🍓 + 🍓 + 🍓 + 🍓 = 400, 🍊 + 🍓 + 🍓 = 350, what is 🍊 + 🍓 + 🍑 + 🍍?",
      options: [
        { id: 0, text: "700", isCorrect: false },
        { id: 1, text: "800", isCorrect: true },
        { id: 2, text: "600", isCorrect: false },
        { id: 3, text: "750", isCorrect: false },
        { id: 4, text: "950", isCorrect: false },
      ],
      fruits: {
        strawberry: 100, // 🍓
        orange: 150, // 🍊
        peach: 200, // 🍑
        pineapple: 350, // 🍍
      },
      correctAnswer: 800,
    },
    // Fruit Puzzle 4
    {
      text: "If 🍍 + 🍍 + 🍍 + 🍍 = 1600, 🍎 + 🍌 + 🍍 = 1100, what is 🍎 + 🍌 + 🍏 + 🍍?",
      options: [
        { id: 0, text: "1350", isCorrect: true },
        { id: 1, text: "1450", isCorrect: false },
        { id: 2, text: "1250", isCorrect: false },
        { id: 3, text: "1400", isCorrect: false },
        { id: 4, text: "2000", isCorrect: false },
      ],
      fruits: {
        pineapple: 400, // 🍍
        apple: 350, // 🍏
        banana: 250, // 🍌
      },
      correctAnswer: 1350,
    },

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
      setShowResults(true);
    }
  }
  //reset the game and back to default
  const restartGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
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
          <button onClick={() => restartGame()}>Play Again</button>
        </div>
      ) : (
        // question card
        <div className="question-card">
          {/* current question */}
          <h2>
            Question: {currentQuestionIndex + 1} 
          </h2>
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
