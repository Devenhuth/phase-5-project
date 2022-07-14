import React from "react";
import { Link } from "react-router-dom";

function RoomOne() {

    return(
        <div>
            <h1 className="story" >You enter the mansion to find two paths: stairs leading down to a lower floor and a hallway leading forward.</h1>
            <Link to="/RoomTwo"><button className="button1" >Proceed forward</button></Link>
            <Link to="/Basement"><button className="button2" >Head down the stairs</button></Link>
        </div>
    )
}

export default RoomOne;