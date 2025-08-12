function sayMyName() {
    console.log("MALLU");
}

// sayMyName()

// function addTwoNum(n1,n2){

//     console.log(n1+n2);
// }

function addTwoNum(n1,n2) {

    // res = n1+n2
    // return res

    return n1+ n2 ;
}
const res = addTwoNum(3432,)
// console.log(res);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username !!");
        return
    }
    else {
        return `${username} just Logged In`;
    }

}
// console.log(loginUserMessage());

// const Cart= function calculateCartPrice (...n1) {                                         //... is rest operator
//     return n1
// }
// console.log(100,200,300);
// const n = Array.length(Cart)
// console.log(n)
// const total = function Price(){
//     for (i=0 ; i<n ; i++){
//         sum += a[i];
//         return sum
//     }
// }
// console.log(Price())
const user = {
    username : "Mallu",
    price : 200,
}
function handleObjrct (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObjrct(user)

// handleObjrct({
    // username:"Sam",
    // price :300,
// });

const myNewArray = [100,200,300,400]
function returnSecValue(getArray){
    return getArray[1]
    
}
// console.log(returnSecValue(myNewArray));
// console.log(returnSecValue([28213,23193190,32133,32312]));

