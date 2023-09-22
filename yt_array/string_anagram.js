let str1= "ashu";
let str2 = "hsa";
let objstr = {};
let flag = true
if(str1.length !== str2.length){
    flag = false
}
for(ch of str1){
    objstr[ch] = (objstr[ch] || 0 ) +1
}
for(ch of str2){
    if(!objstr[ch]){
        //console.log("not a anagram ");
    }
    objstr[ch]--
}
if(flag == true){
    console.log("Is a anagram");
}
else{
    console.log("Not a anagram");
}
