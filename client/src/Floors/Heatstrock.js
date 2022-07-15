import React from "react";
import { Link } from "react-router-dom";

function Heatstrock() {

    return(
        <div className="FullStory">
            <h1 className="story" >Persisting you keep heading for the treasure wiping away the sweat from your face. Step after step you keep at it until the heat finally takes over causing you to collapse. </h1>
            <Link to="/Deadend"><button className="button" >Continue</button></Link>
        </div>
    )
}

export default Heatstrock;