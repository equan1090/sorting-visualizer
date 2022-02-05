export function QuickSort(arr) {
    const animation = []
    quickSortHelper(arr, 0, arr.length - 1, animation)

    return animation
}

function quickSortHelper(arr, startIdx, endIdx, animation) {
    if (startIdx >= endIdx) {
        return
    }
    pivotIdx = startIdx
    leftIdx = startIdx + 1
    rightIdx = endIdx

    while(rightIdx >= leftIdx) {
        obj = {}
        obj[pivotIdx] = arr[pivotIdx]
        if(arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
            swap(leftIdx, rightIdx, arr, animation)
        }

        if(arr[leftIdx] <= arr[pivotIdx]){
            leftIdx += 1
        }

        if(arr[rightIdx] >= arr[pivotIdx]) {
            rightIdx -= 1
        }
    }
    swap(pivotIdx, rightIdx, arr, animation)
    leftSubArrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)

    if(leftSubArrayIsSmaller) {
        quickSortHelper(arr, startIdx, rightIdx - 1, animation)
        quickSortHelper(arr, rightIdx + 1, endIdx, animation)
    } else{
        quickSortHelper(arr, rightIdx + 1, endIdx, animation)
        quickSortHelper(arr, startIdx, rightIdx - 1, animation)
    }

}

function swap(i, j, arr, animation) {
    arr[i], arr[j] = arr[j], arr[i]
}
