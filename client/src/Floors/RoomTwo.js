import React from "react";
import { Link } from "react-router-dom";

function RoomTwo() {

    return(
        <div>
            <h1 className="story" >Continuing down the path you start to hear a sound echoing from ahead. You believe you can determine where the source is.</h1>
            <Link to="/MusicPlayer"><button className="button1" >Head toward the sound</button></Link>
            <Link to="/Hallway"><button className="button2" >Avoid the sound</button></Link>
        </div>
    )
}

export default RoomTwo;