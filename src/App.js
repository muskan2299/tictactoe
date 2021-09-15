import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  // const [board, setboard] = useState(Array(9).fill(null));
  // null is default value for the array
  // board is current value and setboard is updated value
  // const [isNext, setIsNext] = useState(false);
  // false is default value
  // isNext is current value and setIsNext is updated value
  const winner = calculateWinner(current.board);
  // if winner is not null
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isNext ? 'X' : '0'}`;
  const handleSquareClick = position => {
    // if board position is not null
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      // prev here is the board array is use case that is the previous state or current state
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isNext: !last.isNext });
    });
    setCurrentMove(prev => prev + 1);
    // setIsNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      {/* Calling function */}
    </div>
  );
};

export default App;
