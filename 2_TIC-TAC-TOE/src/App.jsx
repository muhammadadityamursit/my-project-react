import { useState } from "react";

// onSquareClick menjalankan function dalam komponen board yg akan dkirimi props
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {" "}
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // keadaan dari setiap square (index-nya)
  const [xIsNext, setXIsNext] = useState(true); // membuat fungsi pengubahnya. true = giliran X (kondisi awal)

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice(); // membuat array baru dengan method slice karna bentuknya sama
    nextSquares[i] = "X"; // i = tiap - tiap indeksnya

    nextSquares[i] = xIsNext ? "X" : "O"; //ternary operator

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O"); // Ternary Operator
  }

  return (
    <>
      <div className="main">
        <p>Game Tigan</p>
      </div>
      <div className="board">
        {/* Squaree = props dan handleClick sebagai penerima parameter sesuai dengan indeksnya */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>{" "}
      <div className="status">{status}</div>
    </>
  );
}

function calculateWinner(squares) {
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
    const [a, b, c] = lines[i]; // destructuring

    if (squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }
  return false; //jika tidak ada yang menang
}
