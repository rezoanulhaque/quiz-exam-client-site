import React from 'react';
//import "../style.css";
  
const Result = ({score, playAgain, response}) => (
  <div className="score-board">
    <div className="score"> Your score is {score} / {response}correct answer ! ! ! </div>
    <button className="playBtn" onClick={playAgain} > Reset </button>
  </div>
)
  
export default Result;