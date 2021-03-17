import "./App.css";
import React, { useState } from "react";
import PlayerTurn from "./components/PlayerTurn";
import EndGameDeclaration from "./components/EndGameDeclaration";
import NewGame from "./components/NewGame";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="App">
      <PlayerTurn player={player} />
      {gameOver ? (
        <div>
          <EndGameDeclaration player={player} /> <NewGame />{" "}
        </div>
      ) : null}
      <Board gameOver={gameOver} />
    </div>
  );
}

export default App;
