import React from "react";

function KeyBoard() {
  const keyBoardKeys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (<div className="keyboard">
   {keyBoardKeys.map((row, rowIndex)=>(
    <div key={rowIndex} className="keyboard-row">
        {row.split("").map((letter, letterIndex) =>(
          <button  key={letterIndex} className="key">{letter}</button>
        ))}
    </div>
   ))}
  </div>);
}

export default KeyBoard;
