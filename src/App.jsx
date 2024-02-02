import React, { useState } from 'react'
import './App.css'
import CharacterGallery from './Components/CharacterGallery'
import Navbar from './Components/Navbar';

function App() {

  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Click an image to begin!')

  return (
    <>
      <Navbar score={score} message={message} />
      <CharacterGallery setScore={setScore} setMessage={setMessage} />
    </>
  )
}

export default App
