// Memory : Stack(Primitive) snd Heap(non-primitive)
let myName= "mallu"

let anotherName = myName
anotherName = "Mallliakrjuna"
console.log(myName);

console.log(anotherName);

let user={
    email: "abc@gmail.com",
    upi:"abc@ybl"
}
let userTwo =user;

userTwo.email="Mallu@gmail.com"
console.log(user.email);
console.log(userTwo.email);

