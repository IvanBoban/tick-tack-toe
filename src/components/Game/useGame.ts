import React, { MouseEvent } from "react";
import { GameEndStates, SquareValue } from "../../types";
import checkBoardState from "../../utils/checkBoardState";

const initialBoardState = [Array(9).fill(null)];

export default function useGame() {
  const [boardStateHistory, setBoardStateHistory] =
    React.useState<Array<Array<SquareValue>>>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = React.useState<"x" | "o">("x");
  const [moveNumber, setMoveNumber] = React.useState(0);
  const [isWon, setIsWon] = React.useState(false);
  const [isDraw, setIsDraw] = React.useState(false);
  const currentBoardState = boardStateHistory[moveNumber];

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
    setBoardStateHistory(initialBoardState);
    setMoveNumber(0);
    if (isDraw) {
      setIsDraw(false);
    }
    if (isWon) {
      setIsWon(false);
    }
  };

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    const previousBoardState = boardStateHistory.slice(0, moveNumber + 1);
    const current = previousBoardState[moveNumber];
    const squares = [...current];

    squares[parseInt(event.currentTarget.id)] = currentPlayer;

    setBoardStateHistory([...previousBoardState, squares]);
    incrementMoveNumber();

    switch (checkBoardState(squares)) {
      case GameEndStates.WON:
        setIsWon(true);
        return;

      case GameEndStates.DRAW:
        setIsDraw(true);
        return;

      default:
        switchPlayer();
    }
  }

  return {
    currentPlayer,
    switchPlayer,
    moveNumber,
    isWon,
    isDraw,
    currentBoardState,
    resetGame,
    handleClick,
    decrementMoveNumber,
  };
}
