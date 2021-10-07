import React from "react";
import Board from "../Board/Board";
import "./Game.css";
import UndoButton from "./UndoButton/UndoButton";
import useGame from "./useGame";

export default function Game() {
  const {
    currentPlayer,
    moveNumber,
    isWon,
    isDraw,
    currentBoardState,
    resetGame,
    handleClick,
    decrementMoveNumber,
  } = useGame();
  return (
    <div id="game">
      <h3>Current player: {currentPlayer} </h3>
      <h4>Number of moves: {moveNumber}</h4>
      <fieldset disabled={isDraw || isWon}>
        <Board
          currentBoardState={currentBoardState}
          handleClick={handleClick}
        />
      </fieldset>

      <UndoButton
        isDraw={isDraw}
        isWon={isWon}
        undoLastAction={decrementMoveNumber}
        moveNumber={moveNumber}
      />

      {isWon && <h2>Player {currentPlayer} won</h2>}
      {isDraw && <h2>Draw</h2>}
      {(isWon || isDraw) && <button onClick={resetGame}>Play again</button>}
    </div>
  );
}
