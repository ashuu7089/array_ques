let data = [10,12,5,1,3];
let minId;
for(let i = 0; i < data.length; i++){
    let minId = i;
    for(let j = i+1; j < data.length; j++){
        if(data[j]< data[minId]){
            minId = j
        }
    }
    let temp = data[minId]
    data[minId] = data[i]
    data[i]= temp
}
console.log(data);