import React, { useState } from 'react'
import './App.css'
import CharacterGallery from './Components/CharacterGallery'
import Navbar from './Components/Navbar';

function App() {

  const [score, setScore] = useState(0);


  return (
    <>
      <Navbar score={score} />
      <CharacterGallery setScore={setScore} />
    </>
  )
}

export default App
