import './App.css';
import React, { useState } from 'react';
import Board from "./component/Board";
import ScoreBoard from './component/ScoreBoard';
import ResetButton from './component/ResetButton';

function App() {

  const win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying,setPlaying] = useState(true);
  const[scores,setScores] = useState({Person1: 0, Person2: 0 });
  const[gameover, setGameover] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      }
      else {
        return value;
      }
    })
    //console.log(checkWinner(updateBoard));

    const winner = checkWinner(updateBoard);
    if(winner){
    if(winner === "X"){
      let{Person1} = scores;
      Person1 += 1;
      setScores({...scores,Person1});
      
    }
    else{
      let{Person2} = scores;
      Person2 += 1;
      setScores({...scores,Person2});
      
    }
  }
//console.log(scores);

    setBoard(updateBoard);
    setPlaying(!xPlaying);

  } 

  const checkWinner = (board) => {
    for(let i=0;i<win_condition.length;i++){
      const[x,y,z] = win_condition[i];

      if(board[x] && board[x] === board[y] && board[x] === board[z]){
        //console.log(board[x]);
        setGameover(true);
        return board[x];
      }
    }
  }

  const resetBoard = () =>{
    setGameover(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <>
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameover ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard}/>
    </>
  );
}

export default App;
