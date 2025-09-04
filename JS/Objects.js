// singleton  

// Object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Mallikarjuna",
    mySymbol: "key30",
    age: 18,
    place: "Balllari",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'sunday']
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);

Object.freeze('name')
name = "mallu"

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello")
}

jsUser.greetingTwo = function () {
    console.log(`hello user , ${this.name}`)
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
console.log(jsUser);


const tinderUser = {}
tinderUser.id = "123xyz"
tinderUser.name = "Malllu"
tinderUser.isLoggedin = false

const regulaUser = {
    email: "abc@gamil.com",
    fullName: {
        userfullName: {
            firstName: "Mallu",
            secondName: "pattar"
        }
    }
}

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = Object.assign ( {}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }    //to add 2 objects into single object
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "mallu@123gamil.com"
    },
    {
        id: 1,
        email: "mallu@123gamil.com"
    },
    {
        id: 1,
        email: "mallu@123gamil.com"
    },
    {
        id: 1,
        email: "mallu@123gamil.com"
    }
]

// console.log(user[1].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser));
// console.log();

/*Object de-structure and JSON API */

const course = {
    coursename:"web development",
    price : "999",
    courseInstructor:"Mallu"
}

const {courseInstructor : instructor} =course    //object destructor
//  console.log(courseInstructor);
// console.log(instructor);

// {
//     "name" : "mallu",                            }
//     "coursename":"webDevelopment",               }  API 
//     "price":"free"                               }
// }


const student={
    fullName:"Mallikarjuna",
    marks:9.70,
    printmarks:()=>{
        console.log("Marks = ",this.marks);
        
    }
}

const employee={
    calcTax : ()=>{
        console.log("Tax is 10%");
        
    }
};

const karan={
    salary:100000,
    calcTax:()=>{
        console.log("Tax is 20%");
        
    }
};

karan.__proto__ = employee;
