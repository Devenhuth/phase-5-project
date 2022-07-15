import React, { useState } from "react";
import { Link } from "react-router-dom";

function Deadend( { filterSelect, handleUpdateCharacter } ) {

    function handleKillCharacter(e) {
        e.preventDefault();
        const id = filterSelect[0].id
        
        fetch(`/characters/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dead: true
        }), 
        })
            .then((r) => r.json())
            .then(updatedChar => handleUpdateCharacter(updatedChar));
    }


    return(
        <div className="FullStory">
            <h1 className="story" >Saddly {filterSelect[0].name} is now gone, but someone new may take their place if you wish.</h1>
            {filterSelect[0].dead ? null : <button onClick={handleKillCharacter} >Except Fate</button>}
            <br />
            <Link to="/"><button className="button">New beginnings</button></Link>
        </div>
    )
}

export default Deadend;