import React from "react";
import Board from "../Board";
import "./Game.css";
import useGame from "./useGame";

export default function Game() {
  const { currentPlayer } = useGame();
  //to do map out squares onto game
  return (
    <div id="game">
      <h3>Current player: {currentPlayer} </h3>
      <Board />
    </div>
  );
}
