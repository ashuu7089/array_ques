let A = [1, 2, 9, 5, 8, 7]
let n = A.length

//Asscending order 
for (let steps = 0; steps < n; steps++) {
    let flag = false
    for (let i = 0; i < n - steps - 1; i++) {
        if (A[i] > A[i + 1]) {
            flag = true
            let temp = A[i]
            A[i] = A[i + 1]
            A[i + 1] = temp

            // [A[i],A[i+1]] = [A[i+1],A[i]]
        }
    }
    if (flag == false) {
        break;
    }
}
console.log(A)

//Decending order 
for (let steps = 0; steps < n; steps++) {
    let flag = false
    for (let i = 0; i < n - steps - 1; i++) {
        if (A[i] < A[i + 1]) {
            flag = true
            let temp = A[i]
            A[i] = A[i + 1]
            A[i + 1] = temp
        }
    }
    if (flag == false) {
        break;
    }
}
console.log(A)