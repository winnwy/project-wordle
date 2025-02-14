import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        id="guess-input"
        value={guess}
        type="text"
        onChange={handleInput}
      ></input>
    </form>
  );
}

export default GuessInput;
