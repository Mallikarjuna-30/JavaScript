const URL = "https://jsonplaceholder.typicode.com/users/1";

const getFacts = async () => {
    console.log("Getting Data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.company.name);
    console.log(response.status);

}

const URL2 = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector('.btn');
const img = document.querySelector('.imgg');
const loader = document.querySelector('.loading');

btn.addEventListener('click', (e) => {
    console.log(e.target);
    getImg();
})

const getImg = async () => {
    loader.style.display='block';
    img.style.display='none';


    console.log("Getting image");
    let response = await fetch(URL2);
    //console.log(response);
    let data = await response.json();
    //console.log(data);
    img.src=data.message;

    img.onload = ()=>{
        loader.style.display='none';
        img.style.display='block';
    }
}