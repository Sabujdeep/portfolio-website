import React from "react";
import deadpool from "./deadpool-logopng.png"

const Animation = (props) => {

    return(
        <div className="firstPage">
            <div className="click--animation">Click on the logo</div>
            <img src={deadpool} alt="deadpoolImage" id="deadpool" onClick={props.handleChange}/>
        </div>
    )
}

export default Animation