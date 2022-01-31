export function mergeSort(arr) {

    const animation = []

    if(arr.length <= 1) {
        return arr
    }
    const auxiliaryArray = arr.slice()
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animation)
    return animation
}

function mergeSortHelper(mainArr, startIdx, endIdx, auxiliaryArray, animation) {
    if (startIdx == endIdx) {
        return
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArr, animation)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArr, animation)
    doMerge(mainArr, startIdx, middleIdx, endIdx, auxiliaryArray, animation)
}
function doMerge(mainArr, startIdx, middleIdx, endIdx, auxiliaryArray, animation) {
    let k = startIdx
    let i = startIdx
    let j = middleIdx + 1

    while(i <= middleIdx && j <= endIdx) {

        animation.push([i, j])
        animation.push([i, j])

        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            animation.push([k, auxiliaryArray[i]])
            mainArr[k++] = auxiliaryArray[i++]

        } else{
            animation.push([k, auxiliaryArray[j]])
            mainArr[k++] = auxiliaryArray[j++]
        }
    }
    while(i <= middleIdx) {
        animation.push([i, i]);
        animation.push([i, i]);
        animation.push([k, auxiliaryArray[i]]);
        mainArr[k++] = auxiliaryArray[i++]

    }
    while(j <= endIdx) {
        animation.push([j, j]);
        animation.push([j, j]);
        mainArr[k++] = auxiliaryArray[j++]

    }

}
