let data1 = [4,6,25,45]
let data2 = [3,7,12,34,66,90];
let data3 = []
let distance1 = 0;
let distance2 = 0;
let distance3 = 0;
while(distance1 < data1.length && distance2 < data2.length){
    if(data1[distance1]< data2[distance2]){
        data3[distance3] = data1[distance1]
        distance1++;
    }else{
        data3[distance3] = data2[distance2]
        distance2++;
    }
    distance3++
}
while(distance1 < data1.length){
    data3[distance3] = data1[distance1]
    distance1++
    distance3++
}
while(distance2 < data2.length){
    data3[distance3] = data2[distance2]
    distance2++
    distance3++
}
console.log(data3);