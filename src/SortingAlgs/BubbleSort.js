export function BubbleSort(arr) {
    const animation = []
    let isSorted = false
    let counter = 0
    while(!isSorted) {
        isSorted = true
        for(let i = 0; i < arr.length - 1 - counter; i++) {
            animation.push([i, i + 1])
            animation.push([i, i + 1])
            if(arr[i] > arr[i + 1]) {
                swap(i, i+ 1, arr, animation)
                isSorted = false;
            }
        }
        counter++;
    }
    return animation
}

function swap(i, j, arr, animation) {

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

