export function BubbleSort(arr) {
    const animation = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            // Changes color
            animation.push([j, j + 1])

            //Reverts color
            animation.push([j, j + 1])
            if(arr[j] > arr[j + 1]) {
                let larger = j + 1
                const obj = {}
                obj[larger] = arr[j]

                // Pushes object for swapping animation later
                // See NavBar bubbleSortAnimation
                animation.push(obj)
                swap(j, j + 1, arr, animation)

            }
        }
    }


    return animation
}

function swap(i, j, arr, animation) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    const obj = {}
    obj[i] = arr[i]
    animation.push(obj)
}

