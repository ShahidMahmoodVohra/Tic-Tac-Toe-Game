let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


// now reset & new game function will make at top from last

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        // box.innerText = "ABCD"; for given some value like ABCD  but we want to print X & O if turnO is true turn === O turnO is equal to turn === O & we wrote innerText = "O" & trunO = false; bcs next time turn O will not print
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;

        }
        // there is a problem we click all boxes with X & O after full all boxes X & O print again & again therefore we disable boxes after this function i.e box.disabled = true also checkWinner() and make a functio of checkWinner.
        box.disabled = true;
        checkWinner();
    
    });
});

// to check winner we have to check winning pattern 0 1 2 to who is on 0 box element who is on 1st box element & who is on 2nd box element now we have three position p-1,p-2,p-3, and if all position are true than we found winner if no we check another pattern i.e 3,4,5 and more.... and for checking all pattern we will make loop to check it in checkWinner function after const show winner.... and disableBoxes

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = ` Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
     disableBoxes();
};

// 20/7/24
const showDraw = () => {
    msg.innerText = `It's a draw!`;
    msgContainer.classList.remove("hide");
};




const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;  
    let pos3Val = boxes[pattern[2]].innerText; 

    // we will make a condition that position 1,2 & 3 should not empty 

    if(pos1Val != "" && pos2val != "" && pos3Val != ""){
        if(pos1Val === pos2val && pos2val === pos3Val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
    }


    }

    // 20/7/24
    if ([...boxes].every(box => box.innerText !== "")) {
        showDraw();
        return true;
    }

    return false;
};


// now reset & new game function will make at top

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
