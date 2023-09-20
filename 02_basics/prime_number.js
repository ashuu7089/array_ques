
let n = 3;
let isPrime = true;
if(n==1){
    console.log("Number is not composite");
}
else if(n > 1){
    for(let i =2 ; i < n ; i++){
        if(n %i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${n} is a Prime Number`);
    }else {
        console.log(`${n} is not a prime Number`);
    }
}
else{
    console.log(`${n }is not a Prime Number`);
}