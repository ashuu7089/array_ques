
let data = [10,52,62,0,1,2];
let midIn;
for(let i= 0; i<data.length; i++){
    let midIn = i;
    for(let j= i+1; j< data.length; j++){
        if(data[j]> data[midIn]){
            midIn = j
        }
    }
    let temp = data[midIn]
    data[midIn]= data[i]
    data[i] = temp
}
// console.log(data);

let minId;
for(let i = data.length-1; i>=0 ; i--){
    let minId = i;
    for(let j=i-1; j>=0; j--){
        if(data[j]< data[minId]){
            minId = j;
        }
    }
    let temp = data[minId]
    data[minId] = data[i]
    data[i] = temp;
}
 console.log(data);