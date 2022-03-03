import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Board = props => {
  const {
    currPlayer,
    setCurrPlayer
  } = props;

  const [board, setBoard] = useState([]);

  const handleResetGame = () => {
    setBoard([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  }

  useEffect(() => {
    handleResetGame();
  }, []);

  useEffect(() => {
    setCurrPlayer(currPlayer === 'x' ? 'o' : 'x');
  }, [board])

  return (
    <div>
      {board.map((row, rowIdx) => {
        return (
          <div key={rowIdx} id="row">
            {row.map(
              (cell, colIdx) => {
                return (
                  <Cell
                    key={`${rowIdx}:${colIdx}`}
                    board={board}
                    setBoard={setBoard}
                    rowIdx={rowIdx}
                    colIdx={colIdx}
                    currPlayer={currPlayer}
                    setCurrPlayer={setCurrPlayer}
                  />
                )
              }
            )}
          </div>
        )
      })}

      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

Board.propTypes = {

};

export default Board;