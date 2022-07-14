import React from "react";
import { Link } from "react-router-dom";

function Hallways() {

    return(
        <div>
            <h1 className="story" >You continue down the hallway but never feel like you're getting any closer to anything, just more hallway. Looking back you see only the hallway stretching as far as the eye can see.</h1>
            <Link to="/Hallwayss"><button className="button1" >Keep following the hallway</button></Link>
            <Link to="/Deadend"><button className="button2" >Give up?</button></Link>
        </div>
    )
}

export default Hallways;