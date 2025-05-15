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
console.log(loginUserMessage());
