import React from "react";
import './ArrayBlocks.css'
function ArrayBlocks({props}) {
    console.log('this is props', props)
    let size = props.length
    console.log(size)
    return(
        <div className='array-wrapper'>
            {props.map((num, idx) => (
                <div className='each-box' key={idx} style={{height: `${num}px`, width: `${1000 / size}px`}}></div>
            ))}

        </div>
    )

}
export default ArrayBlocks;
