let keybtn = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let notif = document.querySelector(".winner-alert")
let msg = document.querySelector("#msg");


let turnP1 = true ;

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [1,4,7],
    [2,5,8],
];

const findWinner = () => {
        for (let pattern of winPatterns) {
                    let kVal1 = keybtn[pattern[0]].innerText
                    let kVal2 = keybtn[pattern[1]].innerText
                    let kVal3 = keybtn[pattern[2]].innerText


        if (kVal1 !="" && kVal2 != "" && kVal3 != "") {
            if (kVal1===kVal2 && kVal2 === kVal3) {
                console.log("winner",kVal1);
                showWinner(kVal1)
            }
        }     
    }
};

const resetGame = () => {
    turnP1= true ;
    grantAccess();
    notif.classList.add("hide");

}


keybtn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if(turnP1){
            btn.innerText = " X ";
            turnP1 = false ;
            //alert("player2 turn ");
        }else{
            btn.innerText = " O ";
            turnP1 = true ;
            //alert("player1 turn ");
        }
        btn.disabled = true ;

        findWinner();
    });
});


const grantAccess = () => {

    for (const button of keybtn) {
        button.disabled = false ;
        button.innerText = "" ;
    }
}



const blockActions = () => {

    for (const button of keybtn) {
        button.disabled = true ;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulations the winner is ${winner}`;
    notif.classList.remove("hide");
    blockActions();

}





newGameBtn.addEventListener("click" , resetGame)
reset.addEventListener('click' , resetGame)

























