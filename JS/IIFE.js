// Immediately invoke function expression

(function chai(){
    console.log("Hello");
})();

( (name) => {
    // console.log("hi");
    console.log(`Hello ${name}`);
    
})("Mallu");
