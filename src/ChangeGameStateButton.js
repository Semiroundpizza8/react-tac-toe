import React from "react";

const ChangeGameStateButton = (props) => {
    const { isGameStarted, setIsGameStarted } = props;
    const handleStartGame = () =>
        setIsGameStarted(!isGameStarted);
    return (
        <button onClick={handleStartGame}>
            {isGameStarted ? "End" : "Start"} Game
        </button>
    )
};

export default ChangeGameStateButton;