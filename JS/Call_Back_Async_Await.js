
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
    //console.log("Hello");
}
setTimeout(hello,3000)


function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
};

// getData(1,()=>{
//     console.log("Gettinnggg data 2......");
    
//     getData(2), ()=>{
//             console.log("Gettinnggg data 3......");

//         getData(3,()=>{
//                 console.log("Gettinnggg data 4......");

//             getData(4);
//         });
//     };
// });

