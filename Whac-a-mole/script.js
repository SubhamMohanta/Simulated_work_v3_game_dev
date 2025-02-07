const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
let result = 0;
let hitPosition;
let currentTime = 30;
let timerId;

const successSound = new Audio('assets/success.mp3');
const errorSound = new Audio('assets/error.mp3');

function playSound(sound) {
    const clone = sound.cloneNode();
    clone.play();
}

function randomSquare() {
    squares.forEach(square => square.classList.remove('mole'));
    let randomIndex = Math.floor(Math.random() * squares.length);
    let randomSquare = squares[randomIndex];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            scoreDisplay.textContent = result;
            hitPosition = null;
            flashScreen('green');
            playSound(successSound);
        } else {
            flashScreen('red');
            playSound(errorSound);
        }
    });
});

function flashScreen(color) {
    document.body.classList.add(color === 'green' ? 'flash-green' : 'flash-red');
    setTimeout(() => {
        document.body.classList.remove('flash-green', 'flash-red');
    }, 200);
}

function moveMole() {
    timerId = setInterval(randomSquare, 550);
}

function countDown() {
    currentTime--;
    timeLeftDisplay.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

moveMole();
let countDownTimerId = setInterval(countDown, 1000);
