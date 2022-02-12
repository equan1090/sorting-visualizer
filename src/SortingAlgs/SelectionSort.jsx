export function selectionSort(arr) {
    const animation = []
    let currentIdx = 0
    while(currentIdx < arr.length - 1) {
        const obj = {}
        let smallestIdx = currentIdx
        // animation.push([smallestIdx, smallestIdx + 1])
        // animation.push([smallestIdx, smallestIdx + 1])

        // obj['smallest'] = arr[smallestIdx]
        // animation.push(obj)


        for(let i = currentIdx + 1; i < arr.length; i++) {

            animation.push([smallestIdx, i])
            animation.push([smallestIdx, i])
            if(arr[smallestIdx] > arr[i]) {
                const obj = {}
                obj['previous'] = arr[smallestIdx]
                smallestIdx = i
                obj['smallest'] = arr[smallestIdx]
                animation.push(obj)

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
