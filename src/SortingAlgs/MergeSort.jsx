function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr
    }
    auxiliaryArray = arr.slice()
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray)
    return arr
}

function mergeSortHelper(mainArr, startIdx, endIdx, auxiliaryArray) {
    if (startIdx == endIdx) {
        return
    }
    middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArr)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArr)
    doMerge(mainArr, startIdx, middleIdx, endIdx, auxiliaryArray)
}
function doMerge(mainArr, startIdx, middleIdx, endIdx, auxiliaryArray) {
    k = startIdx
    i = startIdx
    j = middleIdx + 1

    while(i <= middleIdx && j <= endIdx) {
        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            mainArr[k] = auxiliaryArray[i]
            i += 1
        } else{
            mainArr[k] = auxiliaryArray[j]
            j += 1
        }
        k += 1
    }
    while(i <= middleIdx) {
        mainArr[k] = auxiliaryArray[i]
        i++
        k++
    }
    while(j <= endIdx) {
        mainArr[k] = auxiliaryArray[j]
        j++
        k++
    }

}
