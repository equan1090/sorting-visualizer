import React, {useState, useEffect} from "react";
import ArrayBlocks from "../ArrayBlocks/ArrayBlocks";
// import {BubbleSort} from "../../SortingAlgs/BubbleSort";
import Slider from '@mui/material/Slider';
import './NavBar.css'

function NavBar() {

    const [arr, setArr] = useState([])
    const [arrSize, setArrSize] = useState(10)

    console.log('this is arr size', arrSize)

    const generateArr = () => {
        let random = []
        for(let i = 0; i < arrSize; i++) {
            random.push(Math.floor(Math.random() * (800 - 5) + 5))
        }
        return random
    }

    //Uses localStorage to keep state on refresh
    useEffect(() => {
        const data = localStorage.getItem('current-array')
        if(data) {
            setArr(JSON.parse(data))
        }
    }, [])
    //Keeps the current array and saves in local storage
    useEffect(() => {
        localStorage.setItem('current-array', JSON.stringify(arr))
    })

    return(
        <>
            <nav className='top-nav-menu'>
                <ul>
                    <li onClick={() => setArr(generateArr())}>Generate New Array</li>
                    <div>
                        <li>Array Size</li>
                        <Slider
                            value={arrSize}
                            onChange={(e, value) => setArrSize(value)}
                            min={5}
                            max={300}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <li>Sorting Method</li>
                </ul>
            </nav>

            <ArrayBlocks props={arr}/>
        </>
    )

}

export default NavBar;

