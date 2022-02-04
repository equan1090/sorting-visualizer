export function BubbleSort(arr) {
    const animation = []
    let isSorted = false

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            animation.push([i, i + 1])
            animation.push([i, i + 1])
            if(arr[j] > arr[j + 1]) {
                animation.push([j, arr[j + 1]])
                swap(j, j + 1, arr)
            }else{
                animation.push([j, arr[j]])
            }
        }
    }
    // let counter = 0

    // while(!isSorted) {
    //     isSorted = true
    //     for(let i = 0; i < arr.length - 1 - counter; i++) {
    //         debugger;
    //         // changes color
    //         animation.push([i, i + 1])
    //         animation.push([i, i + 1])


    //         if(arr[i] > arr[i + 1]) {
    //             animation.push([i, arr[i + 1]])
    //             swap(i, i + 1, arr, animation)

    //             isSorted = false;
    //         }else {
    //             animation.push([i, arr[i]])
    //         }

    //     }
    //     counter++;
    // }

    return animation
}

function swap(i, j, arr) {

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


}

