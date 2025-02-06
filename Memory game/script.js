const cardsArray = [
    { name: 'cheeseburger', image: 'assets/cheeseburger.png', id: 1 },
    { name: 'cheeseburger', image: 'assets/cheeseburger.png', id: 2 },
    { name: 'fries', image: 'assets/fries.png', id: 3 },
    { name: 'fries', image: 'assets/fries.png', id: 4 },
    { name: 'hotdog', image: 'assets/hotdog.png', id: 5 },
    { name: 'hotdog', image: 'assets/hotdog.png', id: 6 },
    { name: 'ice-cream', image: 'assets/ice-cream.png', id: 7 },
    { name: 'ice-cream', image: 'assets/ice-cream.png', id: 8 },
    { name: 'milkshake', image: 'assets/milkshake.png', id: 9 },
    { name: 'milkshake', image: 'assets/milkshake.png', id: 10 },
    { name: 'pizza', image: 'assets/pizza.png', id: 11 },
    { name: 'pizza', image: 'assets/pizza.png', id: 12 }
];


let flippedCards = [];
let matchedCards = [];
let score = 0;

function shuffleCards() {
    return cardsArray.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const shuffledCards = shuffleCards();
    const gameBoard = document.querySelector("#game-board");
    gameBoard.innerHTML = '';

    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-name', card.name);
        cardElement.setAttribute('data-image', card.image);
        cardElement.textContent = '';
        cardElement.addEventListener('click', handleCardClick);
        gameBoard.appendChild(cardElement);
    });
}


function handleCardClick(event) {
    const clickedCard = event.target;

    if (flippedCards.length === 2 || clickedCard.classList.contains('flipped') || matchedCards.includes(clickedCard)) {
        return;
    }

    clickedCard.style.backgroundImage = `url(${clickedCard.getAttribute('data-image')})`;
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}


function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.getAttribute('data-name') === card2.getAttribute('data-name')) {
        matchedCards.push(card1, card2);
        score += 1;
        document.getElementById('score').textContent = score;

        if (matchedCards.length === cardsArray.length) {
            document.getElementById('congrats-message').classList.add('visible');
        }

        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.style.backgroundImage = '';
            card2.style.backgroundImage = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

createBoard();
