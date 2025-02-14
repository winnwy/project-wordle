import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (guess) => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert(`You can only guess ${NUM_OF_GUESSES_ALLOWED} times. 😭`);
      return;
    }
    const nextGuess = {
      value: guess,
      id: crypto.randomUUID(),
    };
    setGuesses([...guesses, nextGuess]);
  };

  return (
    <>
      {/* <GuessResults guesses={guesses} /> */}
      <Guess guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
