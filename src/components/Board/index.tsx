import { MouseEvent } from "react";
import { SquareValue } from "../../types";
import Square from "../Square";
import "./Board.css";

interface BoardProps {
  currentBoardState: Array<SquareValue>;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function Board(props: BoardProps) {
  return (
    <div id="board">
      {props.currentBoardState.map((squareValue, index) => (
        //assigning indexes as keys is only applicable if the amount of
        //elements in the array is constant
        //otherwise it can cause performance issues
        <Square
          handleClick={props.handleClick}
          key={index}
          id={index}
          value={squareValue}
        />
      ))}
    </div>
  );
}
