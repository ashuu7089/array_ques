//sorting a random array using partition logic of quick sort
function partition(arr, start, end) {
    let pIndex = start
    for (let x = start; x < (end); x++) {
        if (arr[x] <= arr[end]) {
            let temp = arr[x]
            arr[x] = arr[pIndex]
            arr[pIndex] = temp
            pIndex++
        }
    }
    let temp = arr[pIndex]
    arr[pIndex] = arr[end]
    arr[end] = temp
    return pIndex
}

function quick_sort(arr, start, end) {
    if (start < end) {
        let pIndex = partition(arr, start, end)
        quick_sort(arr, start, pIndex - 1)
        quick_sort(arr, pIndex + 1, end)
    }
}

let array = [5, 4, 3, 8, 12, 15, 7]
quick_sort(array, 0, array.length - 1)
console.log(...array)