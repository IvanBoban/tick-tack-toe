import { MouseEvent } from "react";
import { SquareValue } from "../../types";
import "./Square.css";
interface SquareProps {
  value: SquareValue;
  id: number;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Square(props: SquareProps) {
  const { value, id, handleClick } = props;

  return (
    <button
      id={id.toString()}
      onClick={handleClick}
      className="square"
      disabled={!!value}
    >
      {value}
    </button>
  );
}
