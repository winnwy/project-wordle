import React, { useState } from "react";

function KeyBoard({ answer }) {
  const [keyStatuses, setKeyStatuses] = useState({});
  const [numberOfInputLetters, setNumberOfInputLetters] = useState(0);

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
    const newStatus = checkLetter(letter, numberOfInputLetters % 5);
    setKeyStatuses((prev) => ({
      ...prev,
      [letter]: newStatus,
    }));
    setNumberOfInputLetters(numberOfInputLetters + 1);
    console.log(numberOfInputLetters);
  };

  const keyBoardKeys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="keyboard">
      {keyBoardKeys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split("").map((letter, letterIndex) => (
            <button
              key={letterIndex}
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
