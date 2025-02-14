import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED, 1);
  const spans = range(0, 5, 1);

  let characters = []
  
  if (guesses) {
    const guess = guesses[guesses.length-1];
    if (guess) {
      characters = guess.value.split("");
    }
  }
  console.log(characters)

  return (
    <div className="guess-results">
      {rows.map(() => (
        <p className="guess">
          {spans.map((i, index) => (
            <span className="cell">{characters[index]}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
