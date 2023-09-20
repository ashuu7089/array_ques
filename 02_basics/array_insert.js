// let arr = [10,50,60,80,45,70];
// let newArrElement = 40;
// let position = 3;
// for(let index = arr.length-1; index >=0; index--){
//     if(index >= position){
//         arr[index +1] = arr[index]
//         if(index == position){
//             arr[index] = newArrElement
//         }
//     }
// } 
// console.log(arr,"Insert the new array element on 3 position");


let arr = [10,9,5,3,1,15,25,30,35];
// let newElement = 20;
// let position = 2;
// for(let index = arr.length - 1 ; index >= 0 ; index --){
//     if(index >= position){
//         arr[index + 1] = arr[index]
//         if(index == position){
//             arr[index] = newElement
//             break;
//         }
//     }
// }
// console.log(arr);

//With while in sorted array in ascending order
for(let index = 0 ; index < arr.length; index ++){
    key = arr[index];
    let nextIndex = index- 1;
    while(nextIndex>=0 && key < arr[nextIndex]){
        arr[nextIndex+1] = arr[nextIndex]
        nextIndex--
    }
    arr[nextIndex+1] = key
}
console.log(arr , "In sorted way");

console.log(arr);
// With for loop and swaping then sorted element in ascending order.
for (let steps = 0; steps < arr.length; steps++) {
    let flag = false
    for (let i = 0; i < arr.length - steps - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            flag = true
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp

            // [A[i],A[i+1]] = [A[i+1],A[i]]
        }
    }
    if (flag == false) {
        break;
    }
}
console.log(arr)
