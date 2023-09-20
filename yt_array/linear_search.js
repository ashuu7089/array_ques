let data = [10,25,1,2,3,50];
let find = 3;
let position;
for(let i = 0; i< data.length; i++){
    if(data[i]==find){
        position= i
    }
}
console.log(position);