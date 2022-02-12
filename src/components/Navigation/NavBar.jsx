import React, {useState, useEffect} from "react";
import ArrayBlocks from "../ArrayBlocks/ArrayBlocks";
import { mergeSort } from "../../SortingAlgs/MergeSort";
import {BubbleSort} from "../../SortingAlgs/BubbleSort";
import { selectionSort } from "../../SortingAlgs/SelectionSort";
import Slider from '@mui/material/Slider';
import './NavBar.css'

function NavBar() {

    const [arr, setArr] = useState([])
    const [arrSize, setArrSize] = useState(10)
    const [speed, setSpeed] = useState(1)
    const ANIMATION_TIME = speed

    //Resets and Generates a new array
    const generateArr = () => {
        let random = []
        for(let i = 0; i < arrSize; i++) {
            random.push(Math.floor(Math.random() * (800 - 5) + 5))
        }
        return random
    }
    const bubbleSortAnimation = () => {
        const copyArr = [...arr]
        const animation = BubbleSort(copyArr)

        for(let i = 0; i < animation.length; i++) {
            const bar = document.getElementsByClassName('each-box')
            //If value is an array then it is for comparing
            // Comparing will highlight the items compared
            if(Array.isArray(animation[i])) {
                const [barOne, barTwo] = animation[i]
                const barOneStyle = bar[barOne]?.style
                const barTwoStyle = bar[barTwo]?.style
                const color = i % 2 === 0 ? 'red' : 'blue'
                setTimeout(() => {
                    if(barOneStyle && barTwoStyle){
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }
                }, i * ANIMATION_TIME)
            }else {
                //If it is an object, then it is for swapping
                setTimeout(() => {
                    // Changes the height of the bars
                    const barObject = animation[i]
                    const key = Object.keys(barObject)[0]
                    const barOneStyle = bar[key]?.style;
                    barOneStyle.height = `${barObject[key]}px`;

                }, i * ANIMATION_TIME)
            }

        }

    }

    const selectionSortAnimation = () => {
        const copyArr = [...arr]
        const animation = selectionSort(copyArr)

        console.log('arr', arr)
        console.log('sorted', animation)
        for(let i = 0; i < animation.length; i++) {
            const bar = document.getElementsByClassName('each-box')
            if(Array.isArray(animation[i])) {
                const [barOne, barTwo] = animation[i]
                const barOneStyle = bar[barOne]?.style
                const barTwoStyle = bar[barTwo]?.style
                const color = i % 2 === 0 ? 'red' : 'blue'
                setTimeout(() => {
                    if(barOneStyle && barTwoStyle){
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }
                }, i * ANIMATION_TIME)
            }else {
                //If it is an object, then it is for swapping
                setTimeout(() => {
                    // Changes the height of the bars

                    const barObject = animation[i]
                    const key = Object.keys(barObject)[0]
                    const barOneStyle = bar[key]?.style;
                    if(barOneStyle){
                        barOneStyle.height = `${barObject[key]}px`;

                    }

                }, i * ANIMATION_TIME)
            }
        }
    }

    //Shows the animation of each box moving
    const mergeSortAnimation = () => {
        const copyArr = [...arr]
        const animation = mergeSort(copyArr)
        for(let i = 0; i < animation.length; i++) {
            const bar = document.getElementsByClassName('each-box')
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {

                const [barOne, barTwo] = animation[i]
                const barOneStyle = bar[barOne]?.style
                const barTwoStyle = bar[barTwo]?.style
                const color = i % 3 === 0 ? 'red' : 'blue'

                setTimeout(() => {
                    if(barOneStyle && barTwoStyle){
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }
                }, i * ANIMATION_TIME)

            }else {
                setTimeout(() => {
                    const [barOne, newHeight] = animation[i]
                    const barOneStyle = bar[barOne]?.style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_TIME)
            }
        }
    }



    //Uses localStorage to keep state on refresh
    useEffect(() => {

        const data = localStorage.getItem('current-array')
        const dataSize = localStorage.getItem('current-size')
        if(data) {
            setArr(JSON.parse(data))
        }
        if(dataSize) {
            setArrSize(JSON.parse(dataSize))
        }
    }, [])
    //Keeps the current array and array size then saves in local storage
    useEffect(() => {
        localStorage.setItem('current-array', JSON.stringify(arr))
        localStorage.setItem('current-size', JSON.stringify(arrSize))

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
                    <div>
                        <li>Speed Delay</li>
                        <Slider
                            value={speed}
                            onChange={(e, value) => setSpeed(value)}
                            min={1}
                            max={100}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <button onClick={() => bubbleSortAnimation()}>Bubble Sort</button>
                    <button onClick={() => selectionSortAnimation()}>Selection Sort</button>
                    <button onClick={() => mergeSortAnimation()}>Merge Sort</button>
                </ul>
            </nav>

            <ArrayBlocks props={arr}/>
        </>
    )

}

export default NavBar;

