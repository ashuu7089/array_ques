//singleton object

const tinderUser = new Object() // singleton object     

const user = {
    name : "ashu",
    email : "ashu@gmail.com",
    age : 21
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('password'));


 