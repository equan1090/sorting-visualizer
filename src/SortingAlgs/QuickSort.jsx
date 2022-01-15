function QuickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1)
    return arr
}

function quickSortHelper(arr, startIdx, endIdx) {
    if (startIdx >= endIdx) {
        return
    }
    pivotIdx = startIdx
    leftIdx = startIdx + 1
    rightIdx = endIdx

    while(rightIdx >= leftIdx) {
        if(arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) swap(leftIdx, rightIdx, arr)

        if(arr[leftIdx] <= arr[pivotIdx]) leftIdx += 1

        if(arr[rightIdx] >= arr[pivotIdx]) rightIdx -= 1
    }
    swap(pivotIdx, rightIdx, arr)
    leftSubArrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)

    if(leftSubArrayIsSmaller) {
        quickSortHelper(arr, startIdx, rightIdx - 1)
        quickSortHelper(arr, rightIdx + 1, endIdx)
    } else{
        quickSortHelper(arr, rightIdx + 1, endIdx)
        quickSortHelper(arr, startIdx, rightIdx - 1)
    }

}

function swap(i, j, arr) {
    arr[i], arr[j] = arr[j], arr[i]
}
