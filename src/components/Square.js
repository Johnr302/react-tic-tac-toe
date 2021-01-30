import React, { useState, useEffect } from "react";
import { SQUARE_CONTENTS, PLAYER } from "../constants";

export default function Square(props) {
  const [imgSrc, setImgSrc] = useState("");
  const [marked, setMarked] = useState("");
  const { currentPlayer, gameOver } = props;
  const disabled = marked !== "" || gameOver === true;

  const markSquare = () => {
    if (currentPlayer === PLAYER.X) {
      setMarked(PLAYER.X);
    } else if (currentPlayer === PLAYER.O) {
      setMarked(PLAYER.O);
    }
  };

  useEffect(() => {
    switch (marked) {
      case "X":
        setImgSrc(SQUARE_CONTENTS.X);
        break;
      case "O":
        setImgSrc(SQUARE_CONTENTS.O);
        break;
      default:
        setImgSrc(SQUARE_CONTENTS.BLANK);
    }
  }, [marked]);

  return (
    <img
      className="square"
      onClick={disabled ? undefined : markSquare}
      src={imgSrc}
      alt=""
    />
  );
}
