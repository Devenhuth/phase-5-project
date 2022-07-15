import React from "react";
import { Link } from "react-router-dom";

function Win({ filterSelect }) {

    return(
            <div className="FullStory">
                <h1 className="story" >Congrats {filterSelect[0].name} has made it through without harm finding some loot in the process. They may go back in if you so wish...</h1>
                <Link to="/"><button className="button" >Return</button></Link>
            </div>
    )
}

export default Win;