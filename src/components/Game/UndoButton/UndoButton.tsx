import React from "react";

interface UndoButtonProps {
  isWon: boolean;
  isDraw: boolean;
  moveNumber: number;
  undoLastMove: () => void;
}
export default function UndoButton(props: UndoButtonProps) {
  const { moveNumber, isWon, isDraw, undoLastMove } = props;
  if (moveNumber > 0) {
    if (!isWon && !isDraw) {
      return <button onClick={undoLastMove}>Undo last move</button>;
    }
  }
  return <div></div>;
}
