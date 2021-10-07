import React from "react";

export default function useGame() {
  const [currentPlayer, setCurrentPlayer] = React.useState<"x" | "o">("x");

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
  };
}
