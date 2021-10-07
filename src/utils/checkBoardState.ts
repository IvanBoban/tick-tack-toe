import { GameEndStates } from "../types";

export const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function checkBoardState(
  currentBoardState: Array<string | null>
) {
  let gameState = "";

  //using for loop because forEach can't be stopped without throwing an error
  for (let i = 0; i <= 7; i++) {
    const [location1, location2, location3] = winningStates[i];
    if (!currentBoardState[location1]) {
      continue;
    }
    if (
      currentBoardState[location1] === currentBoardState[location2] &&
      currentBoardState[location1] === currentBoardState[location3]
    ) {
      return (gameState = GameEndStates.WON);
    }
  }

  if (!currentBoardState.includes(null)) {
    gameState = GameEndStates.DRAW;
    return gameState;
  }

  return gameState;
}
