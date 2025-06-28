// if

const isUserLoggedIn=true
if(2 === "2"){
    // console.log("User logged In !!")
}

const score = 200
if(score>100){
    const power = "Fly"
    // console.log(`user power  = ${power}`)
}
// console.log(`user power = ${power}`)

const balace = 1000
// if (balace>500) console.log("test");                        NOT RECOMMENDED

if (balace < 500) {
    // console.log("Less than 500 ");
} else if (balace<750){
    // console.log("Less than 750");
    
}else{
    // console.log("Above 500");
    
}

const UserLoggedIn = true
const debitCard = false
if (UserLoggedIn && debitCard){
    // console.log("User logged in ")
}

// const month = 3
// switch (month) {
    // case 1:
    //     console.log("Jan")
    //     break;
    // case 2:
    //     console.log("Feb")
    //     break;
    // case 3:
    //     console.log("March")
    //     break;
    // case 4:
    //     console.log("April")
    //     break;

    // default:
    //     console.log("None of the above .")
    //     break;
// }


// const Email = "abc@gamil.com"
// if(Email.length !== 0){
//     if(Email){
//     console.log("Got user email");
    
// } else{
//     console.log("Did not get email");
    
// }}
// else{
//     console.log("eail is empty");
    
// }

// let val;
// val = 5 ?? 10
// val=null ?? 10
// val=undefined ?? 10
// console.log(val);
// console.log(val);

const IceTea = 100
// IceTea <= 80 ?console.log("yes"):console.log("no");



// for of loop
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const i of arr) {
    //console.log(i)                  //1   2   3   4   5
}

const greetings ="hello world"
for (const greet of greetings) {
    // console.log(`Each char id ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('Us',"America")

// console.log(map);
for (const [key , value] of map) {
    // console.log(key,':-',value);
    
}


// const game ={
//     "game1":"FH5",
//     "game2":"GTA5"
// }
// for (const i of game) {
//     // console.log(i);
    
// }

const myObject = {
    js:"Javascript",
    cpp:"C++",
    RB:"Ruby"
}
for (const key in myObject) {
    // console.log(`${key} shortcut = ${myObject[key]}`);
    
}


const programming = ["js","cpp","python"]
for (const key in programming) {
    // console.log(programming[key])
}

const coding= ["js","c++","python","ruby"]
// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (val) =>{
//     console.log(val);
    
// } )
// printMe = (item) =>{
//     console.log(item);
    
// }
// coding.forEach(printMe)

const myCoding = [
    {
        lanuage : "js",
        lanuageFile : "JAvaScript"
    },
    {
        lanuage : "c++",
        lanuageFile : "C++File"
    },
    {
        lanuage : "Python",
        lanuageFile : "PythonFile"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanuage);
    console.log(item.lanuageFile);
    
} )