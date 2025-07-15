let randomNum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('.submit')
const input = document.querySelector('#number')
const guessSlot = document.querySelector('.prev')
const remaining = document.querySelector('.remain')
const lowOrHigh = document.querySelector('.low-high')
const startOver = document.querySelector('.res')

const p = document.createElement('p');
p.style.color = "white";

let guessCount = 1
let playGame = true
let changeCol;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(input.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please guess a valid number.')
    }else if(guess < 1){
        input.value = ''
        alert('enter a number greater than 1.')
    }else if(guess > 100){
        input.value = ''
        alert('enter a number less than 100.')
    }else{
        checkGuess(guess)
        if(guessCount === 11){
            displayGuess(guess)
            displayMessage(`Game Over! the Number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`<h2>Congratulations! You Won</h2>`)
        changeCol = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },300);
        endGame()
    }else if(guess > randomNum){
        displayMessage(`Your guess is too high`)
    }else if(guess < randomNum){
        displayMessage(`Your guess is too low`)
    }
}

function displayGuess(guess){
    input.value = ''
    guessSlot.innerHTML += `${guess} `
    guessCount++;
    remaining.innerHTML = `${11 - guessCount}`
}

function displayMessage(msg){
    lowOrHigh.innerHTML = `${msg}`
}
function endGame(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3>Start new Game.</h3>`
    p.style.cursor = "pointer"
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    
    const newGameBtn = document.querySelector('.button')
    newGameBtn.addEventListener('click', (e)=>{
        console.log('in new game')
        clearInterval(changeCol);
        document.body.style.backgroundColor = "#212121"
        randomNum = parseInt(Math.random() * 100 + 1);
        guessCount = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - guessCount}`;
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}

let randomColor = function () {
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}