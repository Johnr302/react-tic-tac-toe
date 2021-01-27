import React from "react";
import Button from "react-bootstrap/Button";

export default (props) => {
  const { clickHandler } = props;
  return (
    <div className="text-center">
      <Button onClick={clickHandler}>New Game</Button>
    </div>
  );
};
