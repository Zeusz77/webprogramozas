const words = [
    "whiterussian",
    "jäger",
    "vodka",
    "sör",
    "kevert",
    "anaászlé",
    "Kőbányai"
]

let health = 10

let board = document.querySelector('#board')

function showRandomWord(list, gameBoard){
    gameBoard.innerHTML = ''
    let word = list[Math.floor(Math.random() * list.length)]
    for(let betu of word){
        let span = document.createElement('span')
        gameBoard.appendChild(span)
        span.dataset.word = betu.toLowerCase()
    }
}

function showHealth(health){
    document.querySelector('#health').innerHTML = health
}

function end(health){
    let spanok = document.querySelectorAll('#board span')
    let b = true
    spanok.forEach(elem => {if(elem.innerHTML != elem.dataset.word) b = false})
    return b || health <= 0
}

function winLose(health){
    let spanok = document.querySelectorAll('#board span')
    let b = true
    spanok.forEach(elem => {if(elem.innerHTML != elem.dataset.word) b = false})
    if(b) return 'win'
    if(health <= 0) return 'loose'
}

function keyEvent(event){
    let spanok = document.querySelectorAll('#board span')
    //console.log(event.key)
    let betuk = []
    spanok.forEach(element => {
        if(element.dataset.word == event.key) element.innerHTML = element.dataset.word
        betuk.push(element.dataset.word)
    })
    if(!betuk.includes(event.key)){
        if(health > 0) health -= 1 
    }
    if(end(health)){
        document.querySelector('#result').innerHTML = winLose(health) == 'win' ? 'You won' : 'You lost the game'
        document.removeEventListener('keydown', keyEvent)
    }
    showHealth(health)
}

function start(){
    health = 10
    document.querySelector('#result').innerHTML = ''
    showRandomWord(words, board)
    showHealth(health)
    document.addEventListener('keydown', keyEvent)
}

document.querySelector('#newgame').addEventListener('click', start)

start()