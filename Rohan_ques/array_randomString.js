/*
A random array is given , using merge sort sorting the given array 
*/
function merge_sort(A, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2)
        merge_sort(A, start, mid);
        merge_sort(A, mid + 1, end)
        Merge(A, start, mid, end)
        return A

    }
}

function Merge(A, start, mid, end) {
    const n1 = mid - start + 1
    const n2 = end - mid
    const L = []
    const R = []
    for (let i = 0; i < n1; i++) {
        L[i] = A[start + i]
    }
    for (let j = 0; j < n2; j++) {
        R[j] = A[mid + 1 + j]
    }
    let i = 0, j = 0, k = start
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            A[k] = L[i]
            i++; k++
        }
        else {
            A[k] = R[j]
            j++; k++
        }
    }
    while (i < n1) {
        A[k] = L[i]
        i++; k++
    }
    while (j < n2) {
        A[k] = R[j]
        j++; k++
    }
}

let A = [9, 5, 2, 15, 7, 3, 1, 6]
let sorted_array = merge_sort(A, 0, 7)
console.log(sorted_array)