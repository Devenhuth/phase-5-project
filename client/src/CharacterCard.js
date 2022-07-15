import React from "react";
function CharacterCard({ char, handleCharacter }) {


    return (
        <div key={char.id} onClick={handleCharacter}>
            <h1 className="Name" >
                <img className="Image" src={char.picture}/>
                -{char.name}
            </h1 >
        </div>
    )
}

export default CharacterCard;