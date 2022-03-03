import React from 'react';

// { playerName, setPlayerName }
// const NameInput = (props) => {
//   const playerName = props.playerName;
//   const setPlayerName = props.setPlayerName;
const NameInput = (props) => {
  const { playerName, setPlayerName, isGameStarted } = props;

  const handleUpdatePlayerOneName = (event) =>
    setPlayerName(event.target.value);

  return (
    <input
      disabled={isGameStarted}
      value={playerName}
      onChange={handleUpdatePlayerOneName}
    />
  )
};

export default NameInput;
