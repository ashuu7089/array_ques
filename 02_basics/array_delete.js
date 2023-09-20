
// Delete particular element in array without using any method.
let data = [10,19,21,74,20,25];
for(let i =3 ; i < data.length-1; i++){
    data[i]= data[i+1];
}
data.length = data.length-1
console.log(data);