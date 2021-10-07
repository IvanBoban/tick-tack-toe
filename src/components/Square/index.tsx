import { SquareValue } from "../../types";
import "./Square.css";
interface SquareProps {
  value: SquareValue;
  id: number;
}

export default function Square(props: SquareProps) {
  const { value } = props;

  return <button className="square">{value} </button>;
}
