import React from "react";

export default function useGame() {
  const [currentPlayer, setCurrentPlayer] = React.useState<"x" | "o">("x");
  const [moveNumber, setMoveNumber] = React.useState(0);

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
  return {
    currentPlayer,
    switchPlayer,
    moveNumber,
  };
}
