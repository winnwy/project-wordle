import React, { useState } from "react";

function KeyBoard({ answer, handleSubmitGuess }) {
  const [keyStatuses, setKeyStatuses] = useState({});
  const [numberOfInputLetters, setNumberOfInputLetters] = useState(0);
  const [guess, setGuess] = useState("");

  const checkLetter = (guessLetter, index) => {
    if (guessLetter === answer[index]) {
      return "correct";
    } else if (answer.includes(guessLetter)) {
      return "misplaced";
    } else {
      return "incorrect";
    }
  };

  const handleClick = (event) => {
    const letter = event.target.textContent;
    const newStatus = checkLetter(letter, numberOfInputLetters);
    setKeyStatuses((prev) => ({
      ...prev,
      [letter]: newStatus,
    }));
    setNumberOfInputLetters((prev) => prev + 1);

    const newGuess = guess + letter;
    setGuess(newGuess);

    if (newGuess.length === 5) {
      handleSubmitGuess(newGuess);
      setGuess("");
      setNumberOfInputLetters(0);
    }
  };

  const keyBoardKeys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="keyboard">
      {keyBoardKeys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split("").map((letter, letterIndex) => (
            <button
              key={letter}
              className={`key ${keyStatuses[letter] || ""}`}
              onClick={handleClick}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KeyBoard;
