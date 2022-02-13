export function selectionSort(arr) {
    const animation = []
    let currentIdx = 0

    while(currentIdx < arr.length - 1) {

        const obj = {}
        let smallestIdx = currentIdx



        for(let i = currentIdx + 1; i < arr.length; i++) {
            //Pushes twice to change and revert color
            animation.push([smallestIdx, i])
            animation.push([smallestIdx, i])

            if(arr[smallestIdx] > arr[i]) {
                smallestIdx = i
            }
        }
        obj[smallestIdx] = arr[currentIdx]
        animation.push(obj)
        swap(currentIdx, smallestIdx, arr, animation)
        currentIdx += 1
    }
    return animation


}

function swap(i, j, arr, animation) {
    const obj = {}
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    obj[i] = arr[i]
    animation.push(obj)

}
