class Stack {
    data=[]
    currentSize;
    maxSize;
    constructor(size){
       this.maxSize = size;
       this.currentSize =this.data.length
    }
    push(newVal){
        if(this.currentSize>= this.maxSize){
            console.log("Stack is full");
        }else{
            this.data[this.currentSize]= newVal;
            this.currentSize++;
        }
    }
    pop(){
        if(this.currentSize>0){
            this.currentSize--;
            this.data.length = this.currentSize;
        }else{
            console.log("Stack already empty");
        }
    }
    display(){
        console.log(this.data);
    }

}

st= new Stack(3)
st.push(15)
st.push(20)
st.pop()
st.display()
// let arr = [10,12,52,87,10,5,12];
// let bag = '';
// for(let i = 0 ; i < arr.length; i++){
//     for(let j= i+1 ; j< arr.length;j++){
//         if(arr[i]==arr[j]){
//             bag+=arr[j]+ " "
//         }
//     }
// }
// console.log(bag);

// let n = 17;
// let isPrime = true;
// if(n==1){
//     console.log("number is not composite");
// }
// else if(n > 1){
//     for(let i = 2 ; i< n; i++){
//         if(n%i==0){
//             isPrime= false
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(`${n} is a Prime number`);
//     }else{
//         console.log(`${n} is not a Prime number`);
//     }
// } else{
//     console.log("The Number is not a prime number");
// }

// let p =1000;
// let r = 2;
// let t = 2;
// let si;
// console.log(si=p*r*t/100);

// let num = 5;
// let bag= '';
// for(let i =1; i<=num-1; i++){
//     for(let j=1;j<=num-i+1; j++){
//         bag+=j
//     }
//     bag+='\n'
// }
// console.log(bag);