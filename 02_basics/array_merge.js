let data = [12,25,25,52,125,521];
let data2 = [52,58,57,65,54,45];

let data3 = [];
for(let index = 0 ; index < data.length ; index ++){
    data3[index] = data[index]
}
for(let index =0 ; index < data2.length ; index ++){
 data3[data.length + index] = data2[index]
}
console.log(data3);