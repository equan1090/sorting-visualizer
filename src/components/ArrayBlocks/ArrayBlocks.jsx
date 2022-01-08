import React from "react";
import './ArrayBlocks.css'
function ArrayBlocks({props}) {

    return(
        <div className='array-wrapper'>
            {props.map((num, idx) => (
                <div className='each-box' key={idx} style={{height: `${num}px`}}></div>
            ))}

        </div>
    )

}
export default ArrayBlocks;
