import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";
import KeyBoard from "../KeyBoard/KeyBoard";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [keyStatuses, setKeyStatuses] = useState({});

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

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
    setKeyStatuses({}); // Clear keyboard colors here
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        handleDisableInput={handleDisableInput}
      />
      <KeyBoard
        answer={answer}
        handleSubmitGuess={handleSubmitGuess}
        handleDisableInput={handleDisableInput}
        keyStatuses={keyStatuses}
        setKeyStatuses={setKeyStatuses}
      />
      {gameStatus === "win" && (
        <WonBanner guessCount={guesses.length} handleRestart={handleRestart} />
      )}
      {gameStatus === "lose" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
