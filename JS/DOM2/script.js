const btn = document.querySelector('button');
const div= document.querySelector('.btnBox');
let currMode= "light";

btn.addEventListener('click', (e)=>{
    console.log(currMode);
    if(currMode === 'light'){
        currMode = 'dark';
        const body = document.querySelector('body');
        body.style.backgroundColor = "black"
    }
    else{
        currMode ='light';
        const body  = document.querySelector('body');
        body.style.backgroundColor = "white";
    }
    
})

