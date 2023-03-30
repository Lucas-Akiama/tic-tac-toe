
type Quadrado = {
  value: string,
  onSquareClick: ()=>void
}

export default function Square({ value, onSquareClick }: Quadrado) {
    return (
      <button
        className="square"
        style={{ color: value == "X" ? "blue" : "red" }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }