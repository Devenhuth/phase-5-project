import React from "react";
import { Link } from "react-router-dom";

function Underwater() {

    return(
        <div>
            <h1 className="story" >Diving down into the water you start swimming down, treasure soon fills your vision. As you head towards it you also think you see something swim past.</h1>
            <Link to="/UnderwaterLoot"><button className="button1" >Go for the treasure</button></Link>
            <Link to="/PanicWater"><button className="button2" >Rush out of the water</button></Link>
        </div>
    )
}

export default Underwater;