interface SquareProps {
  onClick: () => void;
  value: string; //potentially create enum
}

export default function Square(props: SquareProps) {
  const { value, onClick } = props;

  return <button className="square">{value} </button>;
}
