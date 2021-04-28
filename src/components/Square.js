import React, { useState, useEffect } from "react";
import { SQUARE_CONTENTS, PLAYER } from "../constants";

export default function Square(props) {
  const [imgSrc, setImgSrc] = useState("");
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
      onClick={disabled ? undefined : (event) => markSquare(event, id)}
      src={imgSrc}
      alt=""
    />
  );
}
