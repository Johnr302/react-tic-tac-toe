import React from "react";
import Square from "./Square";

export default function Board(props) {
  const { setPlayerClickHandler, gameOver } = props;
  let result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(
      <Square
        key={i}
        currentPlayer={"X"}
        marked={""}
        setPlayerClickHandler={setPlayerClickHandler}
        gameOver={gameOver}
      />
    );
  }
  return <section className="board">{result}</section>;
}
