let data = new Map([
    ["name",'Sam'],
    ["contact", '123456']
])

data.set("color", "Black")
console.log(data);

//for get map key data.has('')
console.log(data.has('name'));

//for get map value data.get('')
console.log(data.get('name'));

console.log(data.delete('contact'));

//for get map length
console.log(data.size);

for(x of data){
    console.log(x);
}

data.forEach((val, key) => {
    console.log(key);
});