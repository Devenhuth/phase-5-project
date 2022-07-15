import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import CharacterCard from "../CharacterCard";

function Entryway({ setUser, user, character, filterSelect, handleCharacter }) {


    function onLogout () {
        setUser(null)
    }

    const filterChar = character.filter(character => character.user_id === user.id)

    return(
            <div className="FullStory">
                <div className="CharactersList">
                    <Link to="/CreateCharacter"><button className="buttonRecruit" >Recruit Extra</button></Link>
                    <h1>Characters:</h1>
                    {filterChar.map((char) => (
                        <CharacterCard key={char.id} char={char} handleCharacter={handleCharacter}/>
                    )) }
                </div>
                <div className="Logout" >
                    <Logout onLogout={onLogout} />
                </div>
                <h1 className="story" >Welcome {user.username}, do you dare enter?</h1>
                <h1 className="story" >Select an adventurer and go forth</h1>
                {filterSelect[0] ? <h1 className="Picked" >You Have Selected {filterSelect[0].name} to enter</h1> : null }
                {filterSelect[0] ? <Link to="/Doorway"><button className="button" >Enter</button></Link> : null }
            </div>
    )
}

export default Entryway;