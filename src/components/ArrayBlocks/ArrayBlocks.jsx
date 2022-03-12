import React from "react";
import './ArrayBlocks.css'
function ArrayBlocks({props}) {
    
    let size = props.length

    return(
        <div className='array-wrapper'>
            {props.map((num, idx) => (
                <div className='each-box'
                    key={idx}
                    style={{height: `${num}px`, width: `${Math.floor(1000 / size)}px`, color:'red'}}>
                </div>
            ))}
        </div>
    )

}
export default ArrayBlocks;

