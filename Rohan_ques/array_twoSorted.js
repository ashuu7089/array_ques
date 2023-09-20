/* Two sorted array are given and we have to merge that given array in the
 sorted form 
*/
let L = [1, 5, 7, 8]
let R = [3, 4, 9, 15]
let A = []
let i = 0, j = 0, k = 0
let n1 = L.length, n2 = R.length
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
console.log(A)