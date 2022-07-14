import React from "react";
import { Link } from "react-router-dom";

function Greed() {

    return(
        <div>
            <h1 className="story" >You scoop up as much loot as you can carry and try and swim back, the shadow comes toward you as you try to out swim it to no prevail as you feel it tug at your leg pulling you deeper.</h1>
            <Link to="/Deadend"><button className="button" >Continue</button></Link>
        </div>
    )
}

export default Greed;