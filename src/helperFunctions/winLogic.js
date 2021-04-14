import { PLAYER } from "../constants";

export default function winLogic(squareArray, currentPlayer) {
  let win = false;
  if (
    squareArray[0].marked === currentPlayer &&
    squareArray[1].marked === currentPlayer &&
    squareArray[2].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[3].marked === currentPlayer &&
    squareArray[4].marked === currentPlayer &&
    squareArray[5].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[6].marked === currentPlayer &&
    squareArray[7].marked === currentPlayer &&
    squareArray[8].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[0].marked === currentPlayer &&
    squareArray[3].marked === currentPlayer &&
    squareArray[6].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[1].marked === currentPlayer &&
    squareArray[4].marked === currentPlayer &&
    squareArray[7].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[2].marked === currentPlayer &&
    squareArray[5].marked === currentPlayer &&
    squareArray[8].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[0].marked === currentPlayer &&
    squareArray[4].marked === currentPlayer &&
    squareArray[8].marked === currentPlayer
  ) {
    win = true;
    return win;
  } else if (
    squareArray[2].marked === currentPlayer &&
    squareArray[4].marked === currentPlayer &&
    squareArray[6].marked === currentPlayer
  ) {
    win = true;
    return win;
  }
  return win;
}

// [0],[1],[2]
// [3],[4],[5]
// [6],[7],[8]
