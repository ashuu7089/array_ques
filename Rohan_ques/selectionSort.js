let A = [10, 2, 5, 3, 6, 8]
let n = A.length

for (let i = 0; i < n - 1; i++) {
    let min_idx = i
    for (j = i + 1; j < n; j++) {
        if (A[min_idx] > A[j]) {
            min_idx = j
        }
    }
    // let temp = A[i]
    // A[i] = A[min_idx]
    // A[min_idx] = temp
    [A[i], A[min_idx]] = [A[min_idx], A[i]]
}
console.log(A)
//selection sort