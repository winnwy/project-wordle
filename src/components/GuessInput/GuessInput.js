import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");
  const handleInput = (event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please input 5 characters. 💖");
      return;
    }
    console.log(tentativeGuess);
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        value={tentativeGuess}
        type="text"
        onChange={handleInput}
      ></input>
    </form>
  );
}

export default GuessInput;
