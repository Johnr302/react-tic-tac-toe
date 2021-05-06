import React, { useState, useEffect } from "react";
import { SQUARE_CONTENTS, PLAYER } from "../constants";

export default function Square(props) {
  const [squareContent, setSquareContent] = useState("");
  const {
    marked,
    id,
    gameOver = false,
    setPlayerClickHandler = () => {},
  } = props;
  const disabled = marked !== "" || gameOver === true;

  const markSquare = (event, id) => {
    setPlayerClickHandler(id);
  };

  useEffect(() => {
    switch (marked) {
      case "X":
        setSquareContent(PLAYER.X);
        break;
      case "O":
        setSquareContent(PLAYER.O);
        break;
      default:
        setSquareContent("");
    }
  }, [marked]);

  return (
    <div
      className="square"
      onClick={disabled ? undefined : (event) => markSquare(event, id)}
    >
      {squareContent}
    </div>
  );
}
