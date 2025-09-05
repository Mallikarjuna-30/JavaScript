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


class person {
    eat(){
        console.log("Eat");
        
    }

    sleep(){
        console.log("Sleep");
        
    }
};
class Worker extends person{
    constructor(branch){
        super();//to invoke parent class constructor

        this.branch=branch
    }
    work(){
        console.log("I am a worker !! ");
        
    }
    
}

let ramesh =new Worker("Electrical");


let Data= "Secret Info";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }


    viewData(){
        console.log("Website Data",Data);
        
    }
}

let std1=new User("Mallu","Mallu@gamil.com");
let std2=new User("Akhil","Akhil@gamil.com");

class Admin extends User{
    constructor(name,email){
        super(name,email)
        this.name=name;
        this.email=email;
    }
    editData(){
        Data="No secret";
    }
}

let admin1=new Admin("admin1","admin1@gmail.com");
let admin2=new Admin("admin2","admin2@gmail.com");


//ERROR HANDLING
let a=5;
let b=10;
try{
    console.log(a+b);
    console.log(a+b);
    console.log(a+c);
    console.log(a+b);
    console.log(a+b);
    console.log(a+b);
}
catch(err){
    console.log(err);
    
    }
