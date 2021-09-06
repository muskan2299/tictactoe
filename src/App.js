import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  // null is default value for the array
  // board is current value and setboard is updated value
  const [isNext, setIsNext] = useState(false);
  // false is default value
  // isNext is current value and setIsNext is updated value
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isNext ? 'X' : '0'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setboard(prev => {
      // prev here is the board array is use case that is the previous state or current state
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      {/* Calling function */}
    </div>
  );
};

export default App;
