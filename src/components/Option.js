import React from "react";
import "../styles/options.css";

export default function Option({
  option,
  selectedOption,
  onOptionClick,
  correctAnswer,
}) {
  const isCorrectOption = option === correctAnswer;
  const optionClass =
    selectedOption !== ""
      ? isCorrectOption
        ? "option correct"
        : option === selectedOption
        ? "option incorrect"
        : "option"
      : "option";
  return (
    <button
      className={optionClass}
      onClick={() => onOptionClick(option)}
      disabled={selectedOption !== ""}
    >
      {option}
    </button>
  );
}
