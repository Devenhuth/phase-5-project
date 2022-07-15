import React from "react";
import { Link } from "react-router-dom";

function SoundAlarm() {

    return(
        <div className="FullStory" >
            <h1 className="story" >You try to sneak past the entity, but as you look over at them you don’t notice the trip wire at your feet causing you to collapse. Getting up your vision goes dark as the entity grabs you, taking you away.</h1>
            <Link to="/Deadend"><button className="button" >Continue</button></Link>
        </div>
    )
}

export default SoundAlarm;