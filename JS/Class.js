class Car{

    constructor(brand,milage){
        console.log("This is a constructor");
        this.brandName=brand;
        this.milage=milage
    }

    start=()=>{
        console.log("Start");
        
    }

    stop=()=>{
        console.log("Stop");
        
    }

    setBrand=(brand)=>{
        this.brandName = brand;
    }
}

let Benz = new Car("MercrdiseBenz",100);
console.log(Benz);

// Benz.setBrand("MercediesBenz")
let Tesla = new Car("Tesla",1000);
console.log(Tesla);
