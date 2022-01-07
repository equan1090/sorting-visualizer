import React from "react";
import './ArrayBlocks.css'
function ArrayBlocks() {
    let range;

    const randomNum = () => {
        let random = []
        for(let i = 0; i < 300; i++) {
            random.push(Math.floor(Math.random() * (900 - 5) + 5))
        }
        return random
    }

    range = randomNum();
    console.log('this is range', range)
    return(
        <div className='array-wrapper'>
            {range.map((num, idx) => (
                <div className='each-box' key={idx} style={{height: `${num}px`}}></div>
            ))}

        </div>
    )

}
export default ArrayBlocks;
