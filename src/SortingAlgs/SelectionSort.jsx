export function selectionSort(arr) {
    const animation = []
    let currentIdx = 0
    while(currentIdx < arr.length - 1) {
        let smallestIdx = currentIdx
        for(let i = currentIdx + 1; i < arr.length; i++) {
            animation.push([smallestIdx, arr[smallestIdx]])
            if(arr[smallestIdx] > arr[i]) {
                const obj = {}
                smallestIdx = i
                obj.smallest = [smallestIdx, arr[smallestIdx]]
                animation.push(obj)
            }
        }
        
        swap(currentIdx, smallestIdx, arr, animation)
        currentIdx += 1
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
