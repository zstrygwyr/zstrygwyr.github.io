const message = document.querySelector('.message');
let playerImg = document.querySelector('.img1');
let compImg = document.querySelector('.img3');
const score = document.querySelector('.score-input');
const buttons = document.querySelectorAll('button');
const input = document.querySelector('form:first-child');
const output = document.querySelector('.level-main .h1-output');

const next1 = document.querySelector('.next1-button');
const modalLvl1 = document.querySelector('.game-bg-lvl1');
const popup1 = document.querySelector('.modal-bg-lvl1');

const next2 = document.querySelector('.next2-button');
const arrow1 = document.querySelector('.arrow-right1');
const modalLvl2 = document.querySelector('.game-bg-lvl2');
const popup2 = document.querySelector('.modal-bg-lvl2');

const next3 = document.querySelector('.next3-button');
const modalLvl3 = document.querySelector('.game-bg-lvl3');
const arrow2 = document.querySelector('.arrow-right2');
const popup3 = document.querySelector('.modal-bg-lvl3');

const next4 = document.querySelector('.next4-button');
const modalLvl4 = document.querySelector('.game-bg-lvl4');
const arrow3 = document.querySelector('.arrow-right3');
const popup4 = document.querySelector('.modal-bg-lvl4');

const next5 = document.querySelector('.next5-button');
const modalLvl5 = document.querySelector('.game-bg-lvl5');
const arrow4 = document.querySelector('.arrow-right4');
const popup5 = document.querySelector('.modal-bg-lvl5');

const next6 = document.querySelector('.next6-button');
const modalLvl6 = document.querySelector('.game-bg-lvl6');
const arrow5 = document.querySelector('.arrow-right5');
const popup6 = document.querySelector('.modal-bg-lvl6');

const next7 = document.querySelector('.next7-button');
const modalLvl7 = document.querySelector('.game-bg-lvl7');
const arrow6 = document.querySelector('.arrow-right6');
const popup7 = document.querySelector('.modal-bg-lvl7');

const next8 = document.querySelector('.next8-button');
const modalLvl8 = document.querySelector('.game-bg-lvl8');
const arrow7 = document.querySelector('.arrow-right7');
const popup8 = document.querySelector('.modal-bg-lvl8');

const next9 = document.querySelector('.next9-button');
const modalLvl9 = document.querySelector('.game-bg-lvl9');
const arrow8 = document.querySelector('.arrow-right8');
const popup9 = document.querySelector('.modal-bg-lvl9');

const next10 = document.querySelector('.next10-button');
const modalLvl10 = document.querySelector('.game-bg-lvl10');
const arrow9 = document.querySelector('.arrow-right9');
const popup10 = document.querySelector('.modal-bg-lvl10');

const next11 = document.querySelector('.next11-button');
const modalLvl11 = document.querySelector('.game-bg-lvl11');
const arrow10 = document.querySelector('.arrow-right10');



let winner = [0, 0];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);

}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    } else if (computerSelection < 0.64) {
        computerSelection = 'Paper';
    } else {
        computerSelection = "Scissors"
    }
    let result = checkWinner(playerSelection, computerSelection);
    if (result == "Player") {
        result = 'You win!';
        winner[0]++;
    } else if (result == "Computer") {
        result = 'You lose!';
        winner[1]++;
    } else {
        result = 'It is a tie';
    }
    score.innerHTML = "<p>" + winner[0] + "</p>";
    messager("<br><h3>" + result + "</h3> <br> <p> PLAY AGAIN?</p>");
    if (playerSelection == "Rock") {
        playerImg.src = 'img/Rock.png'
    } else if (playerSelection == "Paper") {
        playerImg.src = 'img/Paper.png'
    } else {
        playerImg.src = 'img/Scissors.png'
    }

    if (computerSelection == "Rock") {
        compImg.src = 'img/Rock.png'
    } else if (computerSelection == "Paper") {
        compImg.src = 'img/Paper.png'
    } else {
        compImg.src = 'img/Scissors.png'
    }

    if (winner[0] === 3) {
        popup1.style.display = "flex";
        winner[0] = '3';
    }
    // if (winner[0] == 3) {

    //     popup1.style.display = "flex";
    // }
    if (winner[0] === 5) {
        popup2.style.display = "flex";
        winner[0] = '5';

    }
    if (winner[0] === 8) {
        popup3.style.display = "flex";
        winner[0] = '8';

    }
    if (winner[0] === 10) {
        popup4.style.display = "flex";
        winner[0] = '10';

    }
    if (winner[0] === 13) {
        popup5.style.display = "flex";
        winner[0] = '13';
    }

    if (winner[0] === 15) {
        popup6.style.display = "flex";
        winner[0] = '15';
    }

    if (winner[0] === 18) {
        popup7.style.display = "flex";
        winner[0] = '18';
    }

    if (winner[0] === 20) {
        popup8.style.display = "flex";
        winner[0] = '20';
    }

    if (winner[0] === 23) {
        popup9.style.display = "flex";
        winner[0] = '23';
    }

    if (winner[0] === 25) {
        popup10.style.display = "flex";
        winner[0] = '25';
    }
    output.innerHTML = ` ${input.value}`;

}





next1.addEventListener('click', () => {
    modalLvl1.style.display = 'none';
})

// modalLvl1.addEventListener('click', () => {
//     modalLvl1.style.display = 'none';
// })

arrow1.addEventListener('click', () => {
    modalLvl2.style.display = "flex";
    popup1.style.display = "none";

})

next2.addEventListener('click', () => {
    modalLvl2.style.display = "none";
    popup2.style.display = "none";
})

arrow2.addEventListener('click', () => {
    modalLvl3.style.display = "flex";
    popup2.style.display = "none";

})

next3.addEventListener('click', () => {
    modalLvl3.style.display = "none";
    popup3.style.display = "none";
})

arrow3.addEventListener('click', () => {
    modalLvl4.style.display = "flex";
    popup3.style.display = "none";

})

next4.addEventListener('click', () => {
    modalLvl4.style.display = "none";
    popup4.style.display = "none";
})

arrow4.addEventListener('click', () => {
    modalLvl5.style.display = "flex";
    popup4.style.display = "none";

})

next5.addEventListener('click', () => {
    modalLvl5.style.display = "none";
    popup5.style.display = "none";
})

arrow5.addEventListener('click', () => {
    modalLvl6.style.display = "flex";
    popup5.style.display = "none";

})

next6.addEventListener('click', () => {
    modalLvl6.style.display = "none";
    popup6.style.display = "none";
})

arrow6.addEventListener('click', () => {
    modalLvl7.style.display = "flex";
    popup6.style.display = "none";

})

next7.addEventListener('click', () => {
    modalLvl7.style.display = "none";
    popup7.style.display = "none";
})

arrow7.addEventListener('click', () => {
    modalLvl8.style.display = "flex";
    popup7.style.display = "none";

})

next8.addEventListener('click', () => {
    modalLvl8.style.display = "none";
    popup8.style.display = "none";
})

arrow8.addEventListener('click', () => {
    modalLvl9.style.display = "flex";
    popup8.style.display = "none";

})

next9.addEventListener('click', () => {
    modalLvl9.style.display = "none";
    popup9.style.display = "none";
})

arrow9.addEventListener('click', () => {
    modalLvl10.style.display = "flex";
    popup9.style.display = "none";

})

next10.addEventListener('click', () => {
    modalLvl10.style.display = "none";
    popup10.style.display = "none";
})

arrow10.addEventListener('click', () => {
    modalLvl11.style.display = "flex";
    popup10.style.display = "none";
    output.innerHTML = ` <h1>${input.value}</h1>`;


})

next11.addEventListener('click', () => {
    modalLvl11.style.display = "none";
    popup10.style.display = "none";
})

output.innerHTML = ` ${input.value}`;









function messager(mes) {
    message.innerHTML = mes;
}

function checkWinner(pl, co) {

    if (pl === co) {
        return "Draw"
    }
    if (pl === "Rock") {
        if (co === "Paper") {
            return "Computer"
        } else {
            return "Player"
        }
    }
    if (pl === "Paper") {
        if (co === "Scissors") {
            return "Computer"
        } else {
            return "Player"
        }
    }
    if (pl === "Scissors") {
        if (co === "Rock") {
            return "Computer"
        } else {
            return "Player"
        }
    }
}






// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div class="score"></div>
//     <div class="message"></div>
//     <button type="button">Rock</button>
//     <button type="button">Paper</button>
//     <button type="button">Scissors</button>

//     <script src="script.js"></script>
// </body>
// </html>