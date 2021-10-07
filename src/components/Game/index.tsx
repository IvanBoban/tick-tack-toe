import React from "react";
import Board from "../Board";
import "./Game.css";
import useGame from "./useGame";

export default function Game() {
  const { currentPlayer, moveNumber, isWon, isDraw } = useGame();
  return (
    <div id="game">
      <h3>Current player: {currentPlayer} </h3>
      <h4>Number of moves: {moveNumber}</h4>
      <Board />
      {isWon && <h2>Player {currentPlayer} won</h2>}
      {isDraw && <h2>Draw</h2>}
      {(isWon || isDraw) && <button>Play again</button>}
    </div>
  );
}
