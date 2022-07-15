import React from "react";
import { Link } from "react-router-dom";

function EvilWin() {

    return(
            <div className="FullStory">
                <h1 className="story" >Grabbing his sword from nearby you take this opportunity to end a round table knight. Knowing that he must have plenty of good loot on him that would soon be yours while also losing some of your humanity.</h1>
                <Link to="/Win"><button className="button" >Continue</button></Link>
            </div>
    )
}

export default EvilWin;