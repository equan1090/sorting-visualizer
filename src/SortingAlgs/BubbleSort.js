export function BubbleSort(arr) {
    const animation = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            animation.push([j, j + 1])
            animation.push([j, j + 1])
            if(arr[j] > arr[j + 1]) {
                animation.push([j, arr[j + 1]])
                swap(j, j + 1, arr)
            }else{
                animation.push([j, arr[j]])
            }
        }
    }


    return animation
}

function swap(i, j, arr) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}

