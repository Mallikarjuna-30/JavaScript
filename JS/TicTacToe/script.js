const boxes = document.querySelectorAll(".box")
const resetBtn  =document.querySelector(".reset")
let msg =document.querySelector("#msg")
let newGamebtn=document.querySelector(".new-btn")
let msgContainer = document.querySelector(".msg-container")


let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     if(turnO){
        box.innerHTML="O";
        turnO=false;
     }
     else{
        box.innerHTML="X";
        turnO=true;
     }
     box.disabled = true;

     checkWinner();
    })
})

const disableboxes =()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableboxes =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const  checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val!=""&& pos2Val!=""  &&pos3Val!=""){
            if(pos1Val==pos2Val &&pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
                
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
