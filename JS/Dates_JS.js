let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2006,7,30)
// console.log(myCreatedDate.toDateString());

let myCreateddate = new Date("1-14-1020")
// console.log(myCreateddate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date ()
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate.toLocaleString());
