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
  const [board, setBoard] = useState(BOARD_STATE);
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer] = useState(PLAYER.X);
  const [result, setResult] = useState("");

  const updateBoard = (id, player) => {
    setBoard((prevBoard) => {
      return prevBoard.map((board) => {
        if (board.id === id) {
          return {
            ...board,
            marked: player,
          };
        }
        return board;
      });
    });
  };

  const isBoardEmpty = (board) => {
    const markedEmptyString = (currentValue) => currentValue.marked === "";
    return board.every(markedEmptyString);
  };

  useEffect(() => {
    const isWinner = winLogic(board, player);
    if (isWinner) {
      setGameOver(true);
      setResult(player);
    } else {
      if (!isBoardEmpty(board)) {
        setPlayer((currentPlayer) => {
          if (currentPlayer === PLAYER.X) {
            return PLAYER.O;
          }
          return PLAYER.X;
        });
      }
    }
  }, [board]);

  const setPlayerClickHandler = (id) => {
    updateBoard(id, player);
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
