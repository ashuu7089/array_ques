let data = [21,15,10,97,98,0];
let index ;
for(let item =0 ; item < data.length; item++){
    if(data[item]==0){
        index = item
    }
}
console.log(index);