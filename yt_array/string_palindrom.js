function isPanlindrome(data){
    let start = 0;
    let end = data.length - 1;
    let result = true;
    while(end > start){
        if(data[start] != data[end]){
            result = false;
        }
        start++
        end--
    }
    return result
}
let str= 'tat'
console.log(isPanlindrome(str));