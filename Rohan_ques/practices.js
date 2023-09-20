// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

let data1 = [2,6,12,34];
let data2 = [1,9,20,1000];
let data3 = [23,34,90,2000];
let allData = [];
let i = 0, j = 0, k = 0, l = 0
let n1 = data1.length, n2 = data2.length, n3 = data3.length;
while(i<n1 && j<n2){
    if(data1[i]<=data2[j]){
        allData[l]= data1[i];
        i++; l++
    }else{
        allData[l] = data2[j]
        j++; l++
    }
}
while(i < n1){
    allData[l]= data1[i]
    i++; l++
}
while(j<n2){
    allData[l]=data2[j]
    j++;l++
}
console.log(allData);

