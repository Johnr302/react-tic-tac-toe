import "./App.css";
import React, { useEffect, useState } from "react";
import {
  PlayerTurn,
  EndGameDeclaration,
  NewGame,
  Board,
  winLogic,
} from "./exporter";
import { PLAYER, BOARD_STATE } from "./constants";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");
  const [board, setBoard] = useState(BOARD_STATE);

  // const updateBoard = (key, player) => {
  //   board.map((board) => {
  //     if (board.key === key) {
  //       return {
  //         ...board,
  //         marked: { player },
  //       };
  //     }
  //     return board;
  //   });
  // };

  // useEffect(() => {
  //   let key = 0;
  //   setBoard(updateBoard(key, player));
  // }, []);

  const setPlayerClickHandler = () => {
    setPlayer((currentPlayer) => {
      if (currentPlayer === PLAYER.X) {
        return PLAYER.O;
      }
      return PLAYER.X;
    });
  };

  return (
    <div className="App">
      <PlayerTurn player={player} />
      {gameOver ? (
        <div>
          <EndGameDeclaration result={result} /> <NewGame />{" "}
        </div>
      ) : null}
      <Board
        gameOver={gameOver}
        setPlayerClickHandler={setPlayerClickHandler}
        board={board}
        currentPlayer={player}
      />
    </div>
  );
}

export default App;
