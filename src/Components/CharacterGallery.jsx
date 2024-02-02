import React, { useState } from "react";
import characterData from '../assets/characterData.json';
import './CharacterGallery.css'

function CharacterGallery() {

    const [characters, setCharacters] = useState(characterData);

    function shuffleCharacters() {
        const shutffledCharacters = [...characters].sort(() => Math.random() - 0.5);
        setCharacters(shuffledCharacters);
    }

    return (
        <div className="gallery-container" >
            {characters.map((character) => (
                <img key={character.id} src={character.image} alt={character.name} onClick={shuffleCharacters} style={{ cursor: 'pointer' }} className="image" />
            ))}
        </div>
    )
}

export default CharacterGallery;