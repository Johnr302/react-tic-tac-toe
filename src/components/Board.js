import React from "react";
import Square from "./Square";

export default () => {
  let result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(<Square key={i} />);
  }
  return <section className="board">{result}</section>;
};
