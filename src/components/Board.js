import React from "react";
import Square from "./Square";

export default function Board(props) {
  const { setPlayerClickHandler, gameOver, currentPlayer, board } = props;
  return (
    <section id="board" className="board">
      {board.map((board, index) => {
        return (
          <Square
            key={index}
            id={board.id}
            currentPlayer={currentPlayer}
            marked={board.marked}
            setPlayerClickHandler={setPlayerClickHandler}
            gameOver={gameOver}
          />
        );
      })}
    </section>
  );
}
