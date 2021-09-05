import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  // null is default value for the array
  // board is current value and setboard is updated value
  const [isNext, setIsNext] = useState(false);
  // false is default value
  // isNext is current value and setIsNext is updated value
  const handleSquareClick = position => {
    if (board[position]) {
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

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
