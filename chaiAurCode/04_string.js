const name = "ashu";
const count = 25

//console.log(`hello I am ${name} and I count on game is ${count}`);

//2nd type to create a string or take a string
const gameName = new String("ashu-pateriya-age-22")
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);

//method String.at()
console.log(gameName.at(22));
//1 length not found give a undefined
//2 take a integer and return a string

//method String.charAt()
console.log(gameName.charAt(22),"bbcvb");
//1 length not found give a empty string.

//method String.charCodeAt()
console.log(gameName.charCodeAt());
//1 
  


//sudo lsof -i :5000 
//sudo kill -9 20152