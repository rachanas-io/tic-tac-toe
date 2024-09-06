import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName);

    let editablePlayerName = (
        <span className="player-name"> {playerName} </span>
    );
    let btnCaption = "Edit";

    const handleNameChange = (e) => {
        console.log(e);
        setplayerName(e.target.value);
    };

    if (isEditing) {
        editablePlayerName = (
            <input
                className="player-name"
                required
                value={playerName}
                onChange={handleNameChange}
            />
        );
    }

    const handleEditClick = () => {
        setisEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    };

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol"> {symbol} </span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}

export default Player;
