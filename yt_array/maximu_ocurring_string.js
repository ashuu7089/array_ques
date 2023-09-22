let str = "Aashuuuu";
let strObj = {}
let max= '';
for(let i = 0 ; i< str.length; i++){
    let key =str[i]
    if(!strObj[key]){
        strObj[key]=0;
        
    };
    strObj[key]++
    if(max == '' || strObj[key] > strObj[max]){
        max = key;
        
    }
}
console.log(max);