// Selection Sort => insertion sort

let data = [15,10,5,6,0,1];
let i, current, j;
for(let i =1; i< data.length; i++){
    current = data[i]; 
    j = i-1;
    while(j >= 0 && data[j]> current){
        data[j+1] = data[j]
        j-=1;
    }
    data[j+1]= current
}
console.log(data);