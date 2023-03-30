import Square from "./Square";
import "./Board.css"
type toBoard = {
  xIsNext: boolean,
  squares: any[],
  onPlay: (nextSquares: string[])=> void
}
export default function Board({ xIsNext, squares, onPlay }: toBoard) {

    function ResetScore() {
        localStorage.setItem('pontosJogadorX' , '0')
        localStorage.setItem('pontosJogadorO', '0')
      }
      
    function calculateWinner(squares: any[]){
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    function handleClick(i: number) {
        
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
  
      const nextSquares: string[] = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status: string;
  
    let scorePlayerX: string;
    let scorePlayerO: string;
  
    if (winner) {
      status = "Ganhador: " + localStorage.getItem(`player${winner}`);
      let pontos: number = Number(localStorage.getItem(`pontosJogador${winner}`));
      pontos = pontos + 0.5;
      localStorage.setItem(`pontosJogador${winner}`, `${pontos}`);
  
      if (winner == "X") {
        scorePlayerX =
          "Pontos jogador " +
          localStorage.getItem("playerX") +
          ": " +
          localStorage.getItem("pontosJogadorX");
        scorePlayerO =
          "Pontos jogador " +
          localStorage.getItem("playerO") +
          ": " +
          localStorage.getItem("pontosJogadorO");
      } else {
        scorePlayerX =
          "Pontos jogador " +
          localStorage.getItem("playerX") +
          ": " +
          localStorage.getItem("pontosJogadorX");
        scorePlayerO =
          "Pontos jogador " +
          localStorage.getItem("playerO")  +
          ": " +
          localStorage.getItem("pontosJogadorO");
      }
    } else {
      status =
        "Próximo jogador: " +
        (xIsNext
          ? localStorage.getItem("playerX")
          : localStorage.getItem("playerO"));
      scorePlayerX =
        "Pontos jogador " +
        localStorage.getItem("playerX") +
        ": " +
        localStorage.getItem("pontosJogadorX");
      scorePlayerO =
        "Pontos jogador " +
        localStorage.getItem("playerO") +
        ": " +
        localStorage.getItem("pontosJogadorO");
    }
  
    return (
      <>
        <div className="status"> {status}</div>
        <div className="areaTicTocToe">
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        <div className="score">
          <p className="score-painel">Score:</p>
          <p className="score-player">{scorePlayerX}</p>
          <p className="score-player">{scorePlayerO}</p>
        </div>
        <button className="button-reset" onClick={ResetScore}>
          Zerar pontos
        </button>
      </>
    );
  }