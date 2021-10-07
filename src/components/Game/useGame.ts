import React, { MouseEvent } from "react";
import { GameEndStates, SquareValue } from "../../types";
import checkBoardState from "../../utils";

const initialBoardState = [Array(9).fill(null)];

export default function useGame() {
  const [boardState, setBoardState] =
    React.useState<Array<Array<SquareValue>>>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = React.useState<"x" | "o">("x");
  const [moveNumber, setMoveNumber] = React.useState(0);
  const [isWon, setIsWon] = React.useState(false);
  const [isDraw, setIsDraw] = React.useState(true);
  const currentBoardState = boardState[moveNumber];

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.id);
  }

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

  React.useEffect(() => {
    if (checkBoardState(currentBoardState) === GameEndStates.WON) {
      setIsWon(true);
      return;
    }

    if (checkBoardState(currentBoardState) === GameEndStates.DRAW) {
      setIsDraw(true);
      return;
    }
  }, [moveNumber, currentBoardState]);

  return {
    currentPlayer,
    switchPlayer,
    moveNumber,
    isWon,
    isDraw,
    currentBoardState,
    resetGame,
    handleClick,
  };
}
