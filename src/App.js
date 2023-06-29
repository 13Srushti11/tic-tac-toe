import './App.css';

import Board from "./component/Board";

function App() {
  const board=["X","X","X","X","X","X","X","X","X"];
  return (
    <>
    <Board board={board}/>
    </>
  );
}

export default App;
