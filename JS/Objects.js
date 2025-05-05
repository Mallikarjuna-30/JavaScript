// singleton  

// Object literals

const mySymbol = Symbol("key1")

const jsUser={
    name:"Mallikarjuna",
    mySymbol:"key30",
    age : 18,
    place : "Balllari",
    isLoggedIn:false,
    lastLoginDays:['Monday','sunday']
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);

Object.freeze('name')
name = "mallu"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello")
}

jsUser.greetingTwo = function(){
    console.log(`hello user , ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
