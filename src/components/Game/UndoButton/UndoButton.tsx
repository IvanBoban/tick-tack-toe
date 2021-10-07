import React from "react";

interface UndoButtonProps {
  isWon: boolean;
  isDraw: boolean;
  moveNumber: number;
  undoLastAction: () => void;
}
export default function UndoButton(props: UndoButtonProps) {
  const { moveNumber, isWon, isDraw, undoLastAction } = props;
  if (moveNumber > 0) {
    if (!isWon && !isDraw) {
      return <button onClick={undoLastAction}>Undo last move</button>;
    }
  }
  return <div></div>;
}
