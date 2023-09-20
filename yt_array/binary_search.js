let data = [25,85,99,100,150];
let find = 150;
let start = 0;
let end = data.length-1;
let position ;
while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(data[mid] == find){
        position = mid;
        break;
    } else if(data[mid] < find){
      start = mid +1;
    }else {
        end = mid -1 ;
    }
}
console.log(position);