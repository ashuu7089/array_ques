let data = [10,12,25,35,54,59];
let start = 0
let end = data.length-1;
let find = 54;
let position ;

function recursiveBinary(data, start, end){
    mid = Math.floor((start + end)/2);
    if(data[mid]=== find){
        position = mid;
        return true
    } else if(data[mid]< find){
        recursiveBinary(data, mid +1, end)
    }else{
        recursiveBinary(data, start, mid-1)
    }
}
recursiveBinary(data, start, end)
console.log(position);