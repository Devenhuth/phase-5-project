import React from "react";
import { Link } from "react-router-dom";

function WideAwake() {

    return(
        <div>
            <h1 className="story" >You approach the sleeping entity and quickly recognize him as Gawain, the lost knight of the round table; you also notice he appears to be injured.</h1>
            <Link to="/EvilWin"><button className="button1" >Sneak attack and rob him</button></Link>
            <Link to="/Forever"><button className="button2" >Wait for him to wake and offer help</button></Link>
        </div>
    )
}

export default WideAwake;