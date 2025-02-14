import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value.guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
