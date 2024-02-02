import React, { useEffect } from "react";

function Navbar({ score, message }) {

    return (
        <nav className="navbar">
            <h1>Clicky Game</h1>
            <p>{message}</p>
            <p className="score">Score: {score}</p>
        </nav>
    )
}

export default Navbar;