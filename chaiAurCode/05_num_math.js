const score = 400;
console.log(score);

const balance = new Number(40);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 12.200
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//************************************Math***************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.356 ));
console.log(Math.ceil(4.335));


console.log(Math.random());
console.log((Math.random() * 10) + 1 );

const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) + min);