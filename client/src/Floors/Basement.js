import React from "react";
import { Link } from "react-router-dom";

function Basement() {

    return(
        <div>
            <h1 className="story" >Reaching the bottom you see the path that was once there is now collapsed in. Approaching the rubble you see a small gap in the debris that you believe you could squeeze through.</h1>
            <Link to="/RoomOne"><button className="button1" >Better not, head back up</button></Link>
            <Link to="/UndergroundArea"><button className="button2" >I can probably fit through there</button></Link>
        </div>
    )
}

export default Basement;