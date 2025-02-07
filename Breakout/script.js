document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".game-board");
    const paddle = document.getElementById("paddle");
    const ball = document.getElementById("ball");
    const scoreDisplay = document.getElementById("score");

    let ballX = 295, ballY = 200;
    let ballVelocityX = 1.5, ballVelocityY = 1.5;
    let paddleX = 150;
    let paddleSpeed = 0;
    let score = 0;
    let gameRunning = true;

    let blocks = [];
    function createBlocks() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 9; col++) {
                let block = document.createElement("div");
                block.classList.add("block");
                block.style.left = col * 65 + "px";
                block.style.top = row * 25 + "px";
                board.appendChild(block);
                blocks.push(block);
            }
        }
    }
    createBlocks();

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            paddleSpeed = -6;
        } else if (e.key === "ArrowRight") {
            paddleSpeed = 6;
        }
    });

    document.addEventListener("keyup", () => {
        paddleSpeed = 0;
    });

    function movePaddle() {
        paddleX += paddleSpeed;
        if (paddleX < 0) paddleX = 0;
        if (paddleX > 500) paddleX = 500;
        paddle.style.left = paddleX + "px";
    }

    function moveBall() {
        ballX += ballVelocityX;
        ballY += ballVelocityY;

        ball.style.left = ballX + "px";
        ball.style.top = ballY + "px";

        if (ballX <= 0 || ballX >= 585) ballVelocityX *= -1;
        if (ballY <= 0) ballVelocityY *= -1;

        if (
            ballY >= 370 &&
            ballX > paddleX &&
            ballX < paddleX + 100
        ) {
            ballVelocityY *= -1;
            ballVelocityX += paddleSpeed;
        }

        blocks.forEach((block, index) => {
            let blockX = parseInt(block.style.left);
            let blockY = parseInt(block.style.top);

            if (
                ballX + 15 > blockX &&
                ballX < blockX + 60 &&
                ballY + 15 > blockY &&
                ballY < blockY + 20
            ) {
                block.remove();
                blocks.splice(index, 1);
                ballVelocityY *= -1;
                score++;
                scoreDisplay.innerText = score;
            }
        });

        if (ballY >= 400) {
            gameRunning = false;
            scoreDisplay.innerText = "Game Over!";
        }

        if (blocks.length === 0) {
            gameRunning = false;
            scoreDisplay.innerText = "You Win!";
        }

        if (gameRunning) {
            requestAnimationFrame(updateGame);
        }
    }

    function updateGame() {
        movePaddle();
        moveBall();
    }

    requestAnimationFrame(updateGame);
});
