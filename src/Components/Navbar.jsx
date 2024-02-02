import React, { useEffect } from "react";

function Navbar({ score }) {

    return (
        <nav>
            <p>Score: {score}</p>
        </nav>
    )
}

export default Navbar;