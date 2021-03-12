import React from "react";
import { RESULT } from "../constants";

export default (props) => {
  const { result } = props;
  if (result === RESULT.CATS) {
    return <h1>Cat's Game!</h1>;
  }
  return <h1>Player {result} Won!</h1>;
};
