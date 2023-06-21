import React from "react";
import deadpool from "./deadpool-logopng.png"

const Animation = (props) => {

    return(
        <div className="firstPage">
            <img src={deadpool} alt="deadpoolImage" id="deadpool" onClick={props.handleChange}/>
        </div>
    )
}

export default Animation