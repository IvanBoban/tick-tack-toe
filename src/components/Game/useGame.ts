import React from "react";
import { SquareValue } from "../../types";

const initialBoardState = [Array(9).fill(null)];

export default function useGame() {
  const [boardState, setBoardState] =
    React.useState<Array<Array<SquareValue>>>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = React.useState<"x" | "o">("x");
  const [moveNumber, setMoveNumber] = React.useState(0);
  const [isWon, setIsWon] = React.useState(false);
  const [isDraw, setIsDraw] = React.useState(false);
  const currentBoardState = boardState[moveNumber];

  const incrementMoveNumber = () => {
    setMoveNumber(moveNumber + 1);
  };

  const decrementMoveNumber = () => {
    setMoveNumber(moveNumber - 1);
  };

  const switchPlayer = () => {
    if (currentPlayer === "x") {
      setCurrentPlayer("o");
      return;
    }
    setCurrentPlayer("x");
  };

  const resetGame = () => {
    setBoardState(initialBoardState);
    setMoveNumber(0);
    if (isDraw) {
      setIsDraw(false);
    }
    if (isWon) {
      setIsWon(false);
    }
  };

  return {
    currentPlayer,
    switchPlayer,
    moveNumber,
    isWon,
    isDraw,
    currentBoardState,
  };
}
