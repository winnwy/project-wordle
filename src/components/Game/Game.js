import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleSubmitGuess = (guess) => {
    const nextGuess = {
      guess: guess,
      index: crypto.randomUUID(),
    };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("win");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  };

  const handleDisableInput = () => {
    return gameStatus === "win" || gameStatus === "lose";
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        handleDisableInput={handleDisableInput}
      />
      {gameStatus === "win" && <WonBanner guessCount={guesses.length} />}
      {gameStatus === "lose" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
