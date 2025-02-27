import React, { useState } from "react";
import "../styles/app.css";
import Button from "./Button";
import StartQuestions from "./StartQuestions";
import Header from "./Header";
import Footer from "./Footer";

const quiz_data = {
  Capitals: {
    "Level 1": [
      {
        Question: "What is the capital of Germany?",
        Options: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
        "Correct Answer": "Berlin",
      },
      {
        Question: "What is the capital of France?",
        Options: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        "Correct Answer": "Paris",
      },
      {
        Question: "What is the capital of Spain?",
        Options: ["Barcelona", "Madrid", "Seville", "Valencia"],
        "Correct Answer": "Madrid",
      },
    ],
    "Level 2": [
      {
        Question: "What is the capital of Australia?",
        Options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        "Correct Answer": "Canberra",
      },
      {
        Question: "What is the capital of Brazil?",
        Options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        "Correct Answer": "Brasília",
      },
      {
        Question: "What is the capital of Canada?",
        Options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        "Correct Answer": "Ottawa",
      },
    ],
    "Level 3": [
      {
        Question: "What is the capital of South Africa?",
        Options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
        "Correct Answer": "Pretoria",
      },
      {
        Question: "What is the capital of New Zealand?",
        Options: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
        "Correct Answer": "Wellington",
      },
      {
        Question: "What is the capital of Switzerland?",
        Options: ["Zurich", "Geneva", "Bern", "Basel"],
        "Correct Answer": "Bern",
      },
    ],
  },
  Science: {
    "Level 1": [
      {
        Question: "What is the chemical symbol for water?",
        Options: ["H2O", "CO2", "O2", "N2"],
        "Correct Answer": "H2O",
      },
      {
        Question: "Which planet is known as the Red Planet?",
        Options: ["Mars", "Venus", "Jupiter", "Saturn"],
        "Correct Answer": "Mars",
      },
      {
        Question: "What gas do plants absorb from the atmosphere?",
        Options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "Correct Answer": "Carbon Dioxide",
      },
    ],
    "Level 2": [
      {
        Question: "Who developed the theory of relativity?",
        Options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        "Correct Answer": "Albert Einstein",
      },
      {
        Question: "What is the largest organ in the human body?",
        Options: ["Heart", "Liver", "Skin", "Lungs"],
        "Correct Answer": "Skin",
      },
      {
        Question: "What is the most abundant gas in Earth's atmosphere?",
        Options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        "Correct Answer": "Nitrogen",
      },
    ],
    "Level 3": [
      {
        Question: "What is the powerhouse of the cell?",
        Options: [
          "Nucleus",
          "Ribosome",
          "Mitochondria",
          "Endoplasmic Reticulum",
        ],
        "Correct Answer": "Mitochondria",
      },
      {
        Question: "What is the speed of light in a vacuum?",
        Options: [
          "300,000 km/s",
          "150,000 km/s",
          "500,000 km/s",
          "1,000,000 km/s",
        ],
        "Correct Answer": "300,000 km/s",
      },
      {
        Question: "What element has the atomic number 1?",
        Options: ["Hydrogen", "Oxygen", "Helium", "Carbon"],
        "Correct Answer": "Hydrogen",
      },
    ],
  },
  Movies: {
    "Level 1": [
      {
        Question: "Who played the lead role in 'Titanic'?",
        Options: [
          "Brad Pitt",
          "Leonardo DiCaprio",
          "Tom Cruise",
          "Johnny Depp",
        ],
        "Correct Answer": "Leonardo DiCaprio",
      },
      {
        Question: "What is the name of the wizarding school in 'Harry Potter'?",
        Options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
        "Correct Answer": "Hogwarts",
      },
      {
        Question: "Which movie features the quote 'I'll be back'?",
        Options: ["Terminator", "RoboCop", "Predator", "Die Hard"],
        "Correct Answer": "Terminator",
      },
    ],
    "Level 2": [
      {
        Question: "Which movie won the Academy Award for Best Picture in 2020?",
        Options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"],
        "Correct Answer": "Parasite",
      },
      {
        Question: "Who directed 'Inception'?",
        Options: [
          "Steven Spielberg",
          "Christopher Nolan",
          "Quentin Tarantino",
          "James Cameron",
        ],
        "Correct Answer": "Christopher Nolan",
      },
      {
        Question:
          "Which actor portrayed Jack Sparrow in 'Pirates of the Caribbean'?",
        Options: [
          "Orlando Bloom",
          "Johnny Depp",
          "Hugh Jackman",
          "Robert Downey Jr.",
        ],
        "Correct Answer": "Johnny Depp",
      },
    ],
    "Level 3": [
      {
        Question: "In which year was the first 'Star Wars' movie released?",
        Options: ["1977", "1980", "1983", "1999"],
        "Correct Answer": "1977",
      },
      {
        Question: "Which movie features the song 'My Heart Will Go On'?",
        Options: ["Titanic", "The Bodyguard", "Pretty Woman", "Ghost"],
        "Correct Answer": "Titanic",
      },
      {
        Question:
          "What is the highest-grossing movie of all time (not adjusted for inflation)?",
        Options: [
          "Avatar",
          "Avengers: Endgame",
          "Titanic",
          "Star Wars: The Force Awakens",
        ],
        "Correct Answer": "Avatar",
      },
    ],
  },
};

function App() {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleStartButton() {
    if (category === "" || level === "") {
      return;
    }
    setScore(0);
    setShowScore(false);
    setQuestions(quiz_data[category][level]);
  }

  function handlePlayAgainButton() {
    setQuestions([]);
    setShowScore(false);
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {questions.length === 0 && (
          <div className="intro-container">
            <p className="intro-text">
              Welcome to Quiz Game! Select a category and level to start
              playing.
            </p>
            <div className="select-container">
              <div className="select-group">
                <label htmlFor="category" className="select-label">
                  Category:
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select-input"
                >
                  <option value="">Select a Category...</option>
                  {Object.keys(quiz_data).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select-group">
                <label htmlFor="level" className="select-label">
                  Level:
                </label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="select-input"
                >
                  <option value="">Select a Level...</option>
                  {category &&
                    Object.keys(quiz_data[category]).map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                </select>
              </div>
              <div className="button-container">
                <Button onClick={() => handleStartButton()}>Start Quiz</Button>
              </div>
            </div>
          </div>
        )}
        {questions.length > 0 && !showScore && (
          <div className="quiz-container">
            <StartQuestions
              questions={questions}
              setScore={setScore}
              setShowScore={setShowScore}
            />
          </div>
        )}
        {showScore && (
          <div className="score-container">
            <div className="score-card">
              <h2 className="score-title">Your Score</h2>
              <p className="score-value">
                {score} / {questions.length}
              </p>
              <Button onClick={() => handlePlayAgainButton()}>
                Play Again
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
