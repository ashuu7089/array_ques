/*Insertion sort,
=> when random array is given and a key(num) we have to insert into that given array 
Best case T.C. = O(n)
Worst case T.C. = O(n*n)
Average case T.C. = O(n*n)
*/

// Insertion element on specific position 
let arr = [10,50,60,80,45,70];
let newArrElement = 40;
let position = 3;
for(let index = arr.length-1; index >=0; index--){
    if(index >= position){
        arr[index +1] = arr[index]
        if(index == position){
            arr[index] = newArrElement
        }
    }
} 
console.log(arr,"Insert the new array element on 3 position");

// Sorting a array in ascending order

for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    let j = i - 1
    while (j >= 0 && key < arr[j]) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = key
}
console.log(arr, "sorting on array in ascending order")
