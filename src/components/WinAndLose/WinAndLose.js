import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function WinAndLose({ guessCount, answer, gameStatus }) {
  return (
    <>
      {gameStatus === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {guessCount}
            <strong>{guessCount===1? " guess" : " guesses"} </strong>.
          </p>
        </div>
      ) : gameStatus === "lose" ?  (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : <></>}
    </>
  );
}

export default WinAndLose;
