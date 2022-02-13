export function mergeSort(arr) {

    const animation = []

    if(arr.length <= 1) {
        return arr
    }
    const auxiliaryArray = arr.slice()
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animation)

    return animation
}

function mergeSortHelper(mainArr, start, end, auxiliaryArray, animation) {
    if (start === end) {
        return
    }
    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(auxiliaryArray, start, middle, mainArr, animation)
    mergeSortHelper(auxiliaryArray, middle + 1, end, mainArr, animation)
    doMerge(mainArr, start, middle, end, auxiliaryArray, animation)
}
function doMerge(mainArr, start, middle, end, auxiliaryArray, animation) {
    let k = start
    let i = start
    let j = middle + 1

    while(i <= middle && j <= end) {

        //Changes color when comparing
        animation.push([i, j])

        // Reverts color
        animation.push([i, j])

        if(auxiliaryArray[i] <= auxiliaryArray[j]) {

            // overwrite the value at index k in the original array
            animation.push([k, auxiliaryArray[i]])

            mainArr[k] = auxiliaryArray[i]
            k++
            i++

        } else{
            animation.push([k, auxiliaryArray[j]]);
            mainArr[k] = auxiliaryArray[j]
            k++
            j++
        }
    }
    while(i <= middle) {

        //Pushes twice to change and revert color
        animation.push([i, i]);
        animation.push([i, i]);


        animation.push([k, auxiliaryArray[i]]);
        mainArr[k] = auxiliaryArray[i]
        k++
        i++
    }
    while(j <= end) {
        //Pushes twice to change and revert color
        animation.push([j, j]);
        animation.push([j, j]);


        animation.push([k, auxiliaryArray[j]])
        mainArr[k] = auxiliaryArray[j]
        k++
        j++

    }

}
