export default function winLogic(currentPlayer) {
  const win = true;
  if (
    square[0].marked === currentPlayer &&
    square[1].marked === currentPlayer &&
    square[2].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[3].marked === currentPlayer &&
    square[4].marked === currentPlayer &&
    square[5].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[6].marked === currentPlayer &&
    square[7].marked === currentPlayer &&
    square[8].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[0].marked === currentPlayer &&
    square[3].marked === currentPlayer &&
    square[6].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[1].marked === currentPlayer &&
    square[4].marked === currentPlayer &&
    square[7].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[6].marked === currentPlayer &&
    square[7].marked === currentPlayer &&
    square[8].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[0].marked === currentPlayer &&
    square[4].marked === currentPlayer &&
    square[8].marked === currentPlayer
  ) {
    return win;
  } else if (
    square[2].marked === currentPlayer &&
    square[4].marked === currentPlayer &&
    square[6].marked === currentPlayer
  ) {
    return win;
  } else return;
}

// [0],[1],[2]
// [3],[4],[5]
// [6],[7],[8]
