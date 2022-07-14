import React from "react";
import { Link } from "react-router-dom";

function MusicPlayer() {

    return(
        <div>
            <h1 className="story" >The sound becomes clear as music fills your ears, the source coming from the other side of a door. You slowly peek in to see someone sleeping on the opposite end.</h1>
            <Link to="/"><button className="button1" >Try and sneak past</button></Link>
            <Link to="/"><button className="button2" >Get a better look at the sleeping entity</button></Link>
        </div>
    )
}

export default MusicPlayer;