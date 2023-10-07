// singleton

Object.create()


// object literal

let mySym = Symbol("ashu")

const obj = {
    user : "kalu",
    age : 21,
    email : "a@gmail.com",
    [mySym] : "pateriya"
}

obj.email = "kalu@gmail.com";
Object.freeze(obj)
obj.email = "rajfdsl@gmail.com"
console.log(obj[mySym]);
console.log(typeof mySym);

console.log(obj);

