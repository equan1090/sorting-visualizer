export function BubbleSort(arr) {
    const animation = []
    if (arr.length <= 1) return arr;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            animation.push(i, j)
            if(arr[j] > arr[j + 1]) {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
    return animation
}


