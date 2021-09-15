import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isNext ? 'X' : '0'}`;
  const noMoves = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMoves && `Next player is ${current.isNext ? 'X' : '0'}`}
      {!winner && noMoves && `X and O tied`}
    </h2>
  );
};

export default StatusMessage;
