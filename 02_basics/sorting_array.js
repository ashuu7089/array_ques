let data = [51,25,21,10,5];
for(let index = 0 ;index < data.length; index++){
    for(newIndex = 0; newIndex < data.length; newIndex++){
        if(data[newIndex] > data[newIndex + 1 ]){
            let temp = data[newIndex];
            data[newIndex] = data[newIndex + 1]
            data[newIndex + 1] = temp
        }
    }
}
console.log(data);