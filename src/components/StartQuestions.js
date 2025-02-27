import React, { useState } from "react";
import Option from "./Option";
import Button from "./Button";
import "../styles/start-questions.css";

export default function StartQuestions({ questions, setScore, setShowScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setShowNextButton(true);
    if (option === questions[currentQuestion]["Correct Answer"]) {
      setScore((score) => score + 1);
    }
  }

  function handleNextButtonClick() {
    setSelectedOption("");
    setShowNextButton(false);

    if (currentQuestion === questions.length - 1) {
      setShowScore(true);
      return;
    }
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  }

  return (
    <div className="question-container">
      <div className="question-card">
        <h2 className="question-text">{questions[currentQuestion].Question}</h2>
        <div className="options-container">
          {questions[currentQuestion].Options.map((option) => (
            <Option
              key={option}
              option={option}
              selectedOption={selectedOption}
              onOptionClick={handleOptionClick}
              correctAnswer={questions[currentQuestion]["Correct Answer"]}
            />
          ))}
        </div>
        {showNextButton && (
          <div className="next-button-container">
            <Button onClick={() => handleNextButtonClick()}>Next</Button>
          </div>
        )}
      </div>
    </div>
  );
}
