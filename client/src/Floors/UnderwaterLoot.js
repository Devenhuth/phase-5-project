import React from "react";
import { Link } from "react-router-dom";

function UnderwaterLoot() {

    return(
        <div>
            <h1 className="story" >Ignoring the movement you go for the treasure to find a cache of golden items. A black shadow seems to now be circling you.</h1>
            <Link to="/Greed"><button className="button1" >Grab as much as you can carry</button></Link>
            <Link to="/LootOne"><button className="button2" >Grab a few pieces</button></Link>
        </div>
    )
}

export default UnderwaterLoot;