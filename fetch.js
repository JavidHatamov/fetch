function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) ) + min;
    return randomNumber;
}

function findWithId(){
alert("Add The Number !!!");
let number=+prompt("Add the number of id");
console.log(`Id number of the data is ${number}`);
fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
.then(function(data){
    //console.log(data)
    return data.json()
})

.then(function(data){
console.log(data)
})

.catch(function error(){
console.log("error!!!!!")
})
}    
    
function fetchToDo(){
    number=getRandomNumber(1,101);
    console.log(`Id number of the data is ${number}`);
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    .then(function(data){
    //console.log(data)
    return data.json()
})
.then(function(data){
    console.log(data)
})
.catch(function error(){
    console.log("error!!!!!")
})
}











/*
function findWithId(){
    alert("Add The Number !!!");
    let number=+prompt("Add the number of id");
    fetch();
    }    
        
function fetchToDo(){
    number=getRandomNumber(1,101);
    console.log(`Id number of the data is ${number}`);
    fetch();
}

function fetch(){
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    .then(function(data){
    //console.log(data)
    return data.json()
})
.then(function(data){
    console.log(data)
})
.catch(function error(){
    console.log("error!!!!!")
})
}
*/
