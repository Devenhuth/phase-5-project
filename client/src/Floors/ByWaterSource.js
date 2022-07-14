import React from "react";
import { Link } from "react-router-dom";

function ByWaterSource() {

    return(
        <div>
            <h1 className="story" >Looking down into the water you can’t see much. Perhaps if you dove down you could get a better idea.</h1>
            <Link to="/UndergroundHall"><button className="button1" >Ignore and go down the hall</button></Link>
            <Link to="/Underwater"><button className="button2" >Dive down</button></Link>
        </div>
    )
}

export default ByWaterSource;