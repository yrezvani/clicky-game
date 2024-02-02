import React, { useState } from "react";
import characterData from '../assets/characterData.json';
import './CharacterGallery.css'

function CharacterGallery({ setScore }) {

    const [clickedIds, setClickedIds] = useState([]);
    const [characters, setCharacters] = useState(characterData);

    function shuffleCharacters() {
        const shuffledCharacters = [...characters].sort(() => Math.random() - 0.5);
        setCharacters(shuffledCharacters);
    }

    function handleImageClick(id) {

        if (!clickedIds.includes(id)) {
            setClickedIds((prev) => [...prev, id]);
            setScore((prevScore) => prevScore + 1);
        } else {
            console.log('Already clicked');
            setClickedIds([]);
            setScore(0);
        }

        shuffleCharacters();
    }



    return (
        <div className="gallery-container" >
            {characters.map((character) => (
                <img key={character.id} src={character.image} alt={character.name} onClick={() => handleImageClick(character.id)} style={{ cursor: 'pointer' }} className="image" />
            ))}
        </div>
    )
}

export default CharacterGallery;