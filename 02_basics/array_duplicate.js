let arr = [12,10,5,12,1,0,5,8];
let bag = ''
for(let i=0; i< arr.length; i++){
   for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
        bag+= arr[j]+ " "
    }
}
}
console.log(bag);