const user = {
    username:"Mallu",
    price : 1000,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }

}

// user.welcomeMessage()              //Mallu,welcome to website
user.username="MAllikarjuna"
// user.welcomeMessage()                 //MAllikarjuna,welcome to website

//console.log(this);

// function chai() {
//     username:"Mallu"
//     console.log(this.username);
    
// }
// chai()                              //undefined 

// THIS works in objects not functios

// const chai = () => {
//     let username= "Mallu"
//     console.log(this);
    
// }
// chai()
// const addTwo = (n1,n2) => {
//     return n1+n2
// }

//const addTwo = (n1,n2) => n1+n2
//const addTwo = (n1,n2) => (n1+n2)
const addTwo = (n1,n2) => ({username:"Mallu"})
//console.log(addTwo(1,2));
