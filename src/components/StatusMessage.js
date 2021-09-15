import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isNext ? 'X' : '0'}`;
  const noMoves = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoves && (
        <>
          Next player is{' '}
          <span className={current.isNext ? 'text-green' : 'text-orange'}>
            {current.isNext ? 'X' : '0'}{' '}
          </span>
        </>
      )}
      {!winner && noMoves && (
        <>
          <span className="text-green">X</span>and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
