let compImg = document.querySelector("#compops-img img")
let operator
let youImg = document.querySelector("#youops-img img")

function computerRandomOpt(){
    operator = Math.ceil(Math.random()*3)
    switch(operator){
        case 1:
            compImg.setAttribute("src","./assets/paper-hand.png")
            break
        case 2:
            compImg.setAttribute("src","./assets/rock-hand.png")
            break
        case 3:
            compImg.setAttribute("src","./assets/scissors-hand.png")
            break
    }
}

let rockBtn = document.querySelector("#rock-btn")
let paperBtn = document.querySelector("#paper-btn")
let scissorsBtn = document.querySelector("#scissors-btn")


let youScore = 0
let compScore = 0


let youScoreBox = document.querySelector("#your-score")
let compScoreBox = document.querySelector("#comp-score")
let ops = document.querySelector("#logos")

paperBtn.onclick = () => {
    youImg.setAttribute("src","./assets/paper-hand.png")
    computerRandomOpt()
    if (operator == 2){
        youScore++
        youScoreBox.textContent = youScore
    }
    else if (operator == 3) {
        compScore++;
        compScoreBox.textContent = compScore;
    }
    gameEnd()
    
}

rockBtn.onclick = () => {
    youImg.setAttribute("src","./assets/rock-hand.png")
    computerRandomOpt()
    if (operator == 2){
        youScore++
        youScoreBox.textContent = youScore
    }
    else if (operator == 3) {
        compScore++;
        compScoreBox.textContent = compScore;
    }
    gameEnd()
    
}

scissorsBtn.onclick = () => {
    youImg.setAttribute("src","./assets/scissors-hand.png")
    computerRandomOpt()
    if (operator == 2){
        youScore++
        youScoreBox.textContent = youScore
    }
    else if (operator == 3) {
        compScore++;
        compScoreBox.textContent = compScore;
    }
    gameEnd()
    
}

let wonText = document.querySelector("#won")
let body = document.querySelector("body")
let playAgain = document.querySelector("#play-again")
let show = document.querySelector("#game-end")


function gameEnd(){
    if (youScore==5 || compScore==5){
        rockBtn.style.visibility = "hidden"
        paperBtn.style.visibility = "hidden"
        scissorsBtn.style.visibility = "hidden"
    }
    if (youScore==5){
        wonText.textContent = "You won the game"
        body.style.overflowY = "scroll"
        show.style.visibility = "visible"
    }else if (compScore==5){
        wonText.textContent = "Comp won the game"
        body.style.overflowY = "scroll"
        show.style.visibility = "visible"
    }
    playAgain.onclick = ()=>{
        window.open("game.html","_self")
    }
    
}
