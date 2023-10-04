let myDate = new Date()
// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 11, 24)
// console.log(myCreatedDate.toDateString());

myDate.toLocaleString('default', {
    weekday : "short"
})
console.log(myDate);