import './App.css';
import React, { useState } from 'react';
import Board from "./component/Board";

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying,setPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx == boxIdx) {
        return xPlaying === true ? "X" : "O";
      }
      else {
        return value;
      }
    })

    setBoard(updateBoard);
    setPlaying(!xPlaying);
  } 

  return (
    <>
      <Board board={board} onClick={handleBoxClick} />
    </>
  );
}

export default App;
