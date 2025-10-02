const URL="https://jsonplaceholder.typicode.com/users/1";

const getFacts = async ()=>{
    console.log("Getting Data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data);
    console.log(response.status);
    
}