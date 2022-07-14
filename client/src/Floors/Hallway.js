import React from "react";
import { Link } from "react-router-dom";

function Hallway() {

    return(
        <div>
            <h1 className="story" >You decide to follow your better judgement and continue down the hallway, avoiding the sound.</h1>
            <Link to="/Hallways"><button className="button1" >Keep following the hallway</button></Link>
            <Link to="/MusicPlayer"><button className="button2" >Go back to inspect the sound</button></Link>
        </div>
    )
}

export default Hallway;