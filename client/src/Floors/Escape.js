import React from "react";
import { Link } from "react-router-dom";

function Escape() {

    return(
            <div className="FullStory">
                <h1 className="story" >Walking down the endless hallway you start to lose yourself barely holding on, yet you keep going until you notice something unright on the wall. Pushing on it you see it starts to sink in opening a secret path out.</h1>
                <Link to="/Win"><button className="button" >Continue</button></Link>
            </div>
    )
}

export default Escape;