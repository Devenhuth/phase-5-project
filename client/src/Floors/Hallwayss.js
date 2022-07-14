import React from "react";
import { Link } from "react-router-dom";

function Hallwayss() {

    return(
        <div>
            <h1 className="story" >You continue NEVERLEAVING but never feel like you're getting any closer NEVERLEAVING, just more hallway. Looking back you see only the hallway stretching as far NEVERLEAVING.</h1>
            <Link to="/HallWaysss"><button className="button1" >Keep following the hallway</button></Link>
            <Link to="/Deadend"><button className="button2" >Give up?</button></Link>
            <Link to="/Deadend"><button className="button3" >Give up?</button></Link>
            <Link to="/Deadend"><button className="button4" >Give up?</button></Link>
        </div>
    )
}

export default Hallwayss;