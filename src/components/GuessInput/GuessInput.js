import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please input 5 characters. 💖");
    }
    console.log(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        value={guess}
        type="text"
        onChange={handleInput}
      ></input>
    </form>
  );
}

export default GuessInput;
