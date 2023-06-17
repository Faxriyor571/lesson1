//buttons
const bntNew = document.querySelector('.bnt--new')
const bntRoll = document.querySelector('.bnt--roll')
const bntHold = document.querySelector('.bnt--hold')
const score0 = document.querySelector('#score--0')
//image
const image = document.querySelector('.dice')
image.style.display = 'none'

let currentScore = 0
let activePlayer = 0
let score = [0, 0]
let overgame = true

const swichPlayer = () => {
    currentScore = 0
document.querySelector(`#current--${activePlayer}`).textContent = 0
activePlayer = activePlayer === 0 ? 1 : 0
document.querySelector('.player--0').classList.toggle('player--active')
document.querySelector('.player--1').classList.toggle('player--active')
}

bntRoll.addEventListener('click', () => {
    if (overgame) {image.style.display = 'block'
        const random = Math.floor(Math.random() * 6 + 1)
        image.src = `/image/${random}.png`
        if (random !== 1) {
        currentScore += random 
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else {
            swichPlayer()
        }
    }
})

bntHold.addEventListener('click', () => {
    if (overgame) {score[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
        
        if (score[activePlayer] >= 20) {
            document
            .querySelector(`.player--${activePlayer}`).classList.add('player--WINNER')
            overgame = false
        }else {
            swichPlayer()
        }
    }
})

bntNew.addEventListener('click', () => {
        currentScore = 0
        activePlayer = 0
        score = [0, 0]
        overgame = true
        document.querySelector(`#current--0`).textContent =0
        document.querySelector(`#current--1`).textContent =0
        document.querySelector(`#score--0`).textContent = 0
        document.querySelector(`#score--1`).textContent = 0
        document.querySelector('.player--0').classList.remove('player--WINNER')
        document.querySelector('.player--1').classList.remove('player--WINNER')
        document.querySelector('.player--1').classList.remove('player-active')
        document.querySelector('.player--0').classList.add('player-active')

})

