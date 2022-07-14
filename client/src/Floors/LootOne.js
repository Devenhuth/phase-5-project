import React from "react";
import { Link } from "react-router-dom";

function LootOne() {

    return(
        <div>
            <h1 className="story" >You grab a couple of pieces and head to the surface, the black shadow starts heading toward you. Believing it's just after the treasure so you pretend to drop it all. Keeping one behind your back.</h1>
            <Link to="/Win"><button className="button" >Continue</button></Link>
        </div>
    )
}

export default LootOne;