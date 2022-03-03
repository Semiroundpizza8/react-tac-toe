import React, { useState } from 'react';
import PropTypes from 'prop-types';

const cellStyles = (showError) => ({
    width: '100px',
    height: '100px',
    backgroundColor: showError ? 'red' : 'blue',

    color: "white",
    fontSize: "60px"
});

const Cell = props => {
    const {
        board,
        setBoard,
        rowIdx,
        colIdx,
        currPlayer,
        setCurrPlayer
    } = props;

    const [showError, setShowError] = useState(false);

    const handleCellClick = () => {
        try {
            if (board[rowIdx][colIdx] !== "-") {
                throw new Error("Oh no! That piece is taken");
            };
            board[rowIdx][colIdx] = currPlayer;
            const newBoard = [...board];
            setBoard(newBoard);
            // if(currPlayer === 'x') setCurrPlayer('o');
            // else setCurrPlayer('x');
        } catch (error) {
            console.error(error.message)
            setShowError(true);
        }
    }

    return (
        <button
            style={{ ...cellStyles(showError) }}
            onClick={handleCellClick}
        >
            {board[rowIdx][colIdx]}
        </button>
    );
};

export default Cell;