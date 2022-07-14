import React from "react";
import { Link } from "react-router-dom";

function Deadend( { selectedChar } ) {

    function playerEnd() {
        selectedChar.dead = true;
    }

    return(
        <div>
            <h1 className="story" >This character is now gone, but a new one may take its place if you wish.</h1>
            <Link to="/"><button className="button" onClick={playerEnd} >New beginnings</button></Link>
        </div>
    )
}

export default Deadend;