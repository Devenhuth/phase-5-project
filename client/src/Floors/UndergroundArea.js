import React from "react";
import { Link } from "react-router-dom";

function UndergroundArea() {

    return(
        <div>
            <h1 className="story" >Dragging yourself through the debris as it rips at your legs, your arm is able to reach out and pull you the rest of the way. Catching your breath you see the path ahead and what appears to be a body of water.</h1>
            <Link to="/ByWaterSource"><button className="button1" >Go inspect the water</button></Link>
            <Link to="/UndergroundHall"><button className="button2" >Better not get distracted, keep moving</button></Link>
        </div>
    )
}

export default UndergroundArea;