import React from "react";
import Button from "react-bootstrap/Button";

export default (props) => {
  const { newGameClickHandler } = props;
  return (
    <div className="text-center">
      <Button onClick={newGameClickHandler}>New Game</Button>
    </div>
  );
};
