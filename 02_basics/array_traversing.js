let data = [9,45,20,15,0,1,1,41]
// for(let item = 0 ; item < data.length; item++){
//    document.write(`Array ${item} is ${data[item]} <br>`)
// }
// let value = 5;
// document.write(data[value])
function getElement(){
    let ele = document.getElementById('element').value
    if(ele < data.length && typeof(parseInt(ele)==="number")){
    alert(data[ele])
}
    if(ele < 0 && ele ==="undefined"){
        return alert("please enter positive number")
    }
    else{
        alert("please enter the valid input")
    }
}