
setTimeout(() => {
    //console.log("Hello");
}, 4000)

console.log("one")
function sum(a, b) {
    //console.log(a+b);

}
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }


const hello = () => {
    //console.log("Hello");
}
//setTimeout(hello, 3000)


// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// };

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

// let promise = new Promise((resolve,reject)=>{
//     console.log("Hello!!");
//     resolve(123);
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//         console.log("data",dataId);
//         //resolve("Success");
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
//     })

// };

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//     console.log("Hello!!");
//     resolve(123);

// })
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Success!!",res);
// })
// promise.catch((err)=>{
//     console.log("Error!!",err);

// })

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data");
//             resolve("Success");
//         }, 5000)
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data");
//             resolve("Success");
//         }, 5000)
//     })
// }
// console.log("Fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);

//     })
// })

//

async function hi(){
    //console.log("hello");
    
}

function api() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Wheather Data");
            resolve(200)
        },2000);
    });
}

function text(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hello ! ");
            
        },2000)
    })
}

async function getWeatherData() {
    await api();
    await api();
    await text();
}