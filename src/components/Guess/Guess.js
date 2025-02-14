import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const guessAnswer = checkGuess(value ? value.guess : undefined, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={
            "cell " + (guessAnswer ? guessAnswer[num].status : undefined)
          }
        >
          {value ? value.guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
