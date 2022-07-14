import React from "react";
import { Link } from "react-router-dom";

function PanicWater() {

    return(
        <div>
            <h1 className="story" >The sight of something scares you and as you rush to turn back and swim, the commotion in the water draws the monster toward you. </h1>
            <Link to="/Deadend"><button className="button" >Continue</button></Link>
        </div>
    )
}

export default PanicWater;