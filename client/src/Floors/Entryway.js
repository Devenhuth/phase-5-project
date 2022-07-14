import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../Logout";

function Entryway({ setUser, user, character, setSelectedChar }) {

    // function setCharacter() {
        // setSelectedChar(target)
    // }


    function onLogout () {
        setUser(null)
    }

    character[0].dead = true;
    setSelectedChar = character[1]

    console.log(character)

    const filterChar = character.filter(character => character.user_id === user.id)

    const characterArray = filterChar.map((data) => {
        return (
            <div key={data.id} >
                <h1 className="Name" >
                    <img className="Image" src={data.picture} />
                    -{data.name}
                </h1 >
            </div>
        )
    })


    return(
            <div>
                <div className="CharactersList">
                    <NavLink to="/CreateCharacter"><button className="buttonRecruit" >Recruit Extra</button></NavLink>
                    <h1>Characters:</h1>
                    <h1>{characterArray}</h1>
                </div>
                <div className="Logout" >
                    <Logout onLogout={onLogout} />
                </div>
                <h1 className="story" >Welcome {user.username}, do you dare enter?</h1>
                <h1 className="story" >Select an adventurer and go forth</h1>
                {setSelectedChar.dead ? <NavLink to="/Deadend"><button className="button" >Enter</button></NavLink> : <NavLink to="/RoomOne"><button className="button" >Enter</button></NavLink> }
                {/* {user ? <Entryway setUser={setUser} user={user} character={character} setSelectedChar={setSelectedChar} /> : <CreateAcc setCurrentUser={setUser} /> } */}
            </div>
    )
}

export default Entryway;