// TIC-TAC-TOE
// As users playing a two player game we want to:

// x enter our names and have them displayed
// x have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser


import React, { useState } from "react";
import ChangeGameStateButton from "./ChangeGameStateButton";
import NameInput from "./NameInput";
import Board from "./Board";

const App = () => {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currPlayer, setCurrPlayer] = useState("x");

  return (
    <>
      <NameInput
        isGameStarted={isGameStarted}
        playerName={playerOneName}
        setPlayerName={setPlayerOneName}
      />

      <NameInput
        isGameStarted={isGameStarted}
        playerName={playerTwoName}
        setPlayerName={setPlayerTwoName}
      />

      <p>{playerOneName} VS {playerTwoName}</p>

      <ChangeGameStateButton
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />

      <p>Current Turn: {currPlayer}</p>

      <Board
        currPlayer={currPlayer}
        setCurrPlayer={setCurrPlayer}
      />

    </>
  )
};

export default App;