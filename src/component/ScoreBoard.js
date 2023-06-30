import React from 'react'
import "./ScoreBoard.css"

const ScoreBoard = ({scores,xPlaying}) => {
console.log(scores);
const {Person1 , Person2} = scores;
  return (
    <div className='scoreboard'>
     <span className={`score x-score ${!xPlaying && "inactive"}`}>Person1 - {Person1}</span>
     <span className={`score o-score ${xPlaying && "inactive"}`}>Person2 - {Person2}</span>
    </div>
  )
}

export default ScoreBoard
