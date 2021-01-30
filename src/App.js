import "./App.css";
import React, { useState } from "react";
import PlayerTurn from "./components/PlayerTurn";
import WinnerDeclaration from "./components/WinnerDeclaration";
import NewGame from "./components/NewGame";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="App">
      <PlayerTurn player={player} />
      <WinnerDeclaration player={player} gameOver={gameOver} />
      <NewGame />
      <Board gameOver={gameOver} />
    </div>
  );
}

export default App;
