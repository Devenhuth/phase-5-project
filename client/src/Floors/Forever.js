import React from "react";
import { Link } from "react-router-dom";

function Forever() {

    return(
        <div className="FullStory">
            <h1 className="story" >Gawain awakes, noting that you are in the room he lets you know that sense you know where he is he can’t let you leave anymore as he gets up and approaches you subduing you with ease.</h1>
            <Link to="/Deadend"><button className="button" >Continue</button></Link>
        </div>
    )
}

export default Forever;