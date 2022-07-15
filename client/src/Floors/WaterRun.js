import React from "react";
import { Link } from "react-router-dom";

function WaterRun() {

    return(
        <div>
            <h1 className="story" >Turning back around you still see the body of water that you could explore or crawl through the rubble and head back up to explore the base floor</h1>
            <Link to="/Underwater"><button className="button1" >Dive into the water</button></Link>
            <Link to="/RoomTwo"><button className="button2" >Crawl back through the rubble</button></Link>
        </div>
    )
}

export default WaterRun;