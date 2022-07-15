import React from "react";
import { Link } from "react-router-dom";

function Doorway({ filterSelect }) {

    return(
        <div className="FullStory">
            <h1 className="story" >You get ready to send your adventurer inside when you hear a voice pass judgement the adventurer first</h1>
            {filterSelect[0].dead ? <Link to="/Deadend"><button className="button" >Enter</button></Link> : <Link to="/RoomOne"><button className="button" >Enter</button></Link>}
        </div>
    )
}

export default Doorway;