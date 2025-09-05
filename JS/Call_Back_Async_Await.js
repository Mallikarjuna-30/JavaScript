
setTimeout(()=>{
    //console.log("Hello");
},4000) 

console.log("one")
function sum(a,b){
    //console.log(a+b);
    
}
function calculator (a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,(a,b)=>{
    //console.log(a+b);
    
})


const hello = ()=>{
    console.log("Hello");
}
setTimeout(hello,3000)
