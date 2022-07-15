import React from "react";
import { Link } from "react-router-dom";

function UndergroundHall() {

    return(
        <div>
            <h1 className="story" >As you continue down the path you start to notice that you're getting warmer by the second, but at the same time further down you see what could only be a pile of treasure.</h1>
            <Link to="/Heatstrock"><button className="button1" >Go for the treasure</button></Link>
            <Link to="/WaterRun"><button className="button2" >To hot head back</button></Link>
        </div>
    )
}

export default UndergroundHall;