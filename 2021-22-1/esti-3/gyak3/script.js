const allatkert = [
    {
        nev: 'Vilmos',
        faj: 'medve',
        latogatok: 5
    },
    {
        nev: 'Gergo',
        faj: 'mókus',
        latogatok: 15
    },
    {
        nev: 'Timi',
        faj: 'hörcsög',
        latogatok: 1
    }
]
/*
let main = document.querySelector('#main')

for(const allat of allatkert){
    let p = document.createElement('p')
    p.innerHTML = `${allat.nev} ${allat.faj} <span class="${allat.nev}">${allat.latogatok}</span> `
    let buttonp = document.createElement('button')
    buttonp.innerHTML = '+'
    let buttonm = document.createElement('button')
    buttonm.innerHTML = '-'
    buttonp.addEventListener('click', (event)=>{
        let num = document.querySelector(`.${allat.nev}`)
        if(parseInt(num.innerHTML) < 20){
            num.innerHTML = parseInt(num.innerHTML) + 1
        }
        
    })
    buttonm.addEventListener('click', (event)=>{
        let num = document.querySelector(`.${allat.nev}`)
        if(!(parseInt(num.innerHTML) == 0)){
            num.innerHTML = parseInt(num.innerHTML) - 1
        }
    })
    p.appendChild(buttonp)
    p.appendChild(buttonm)
    main.appendChild(p)
}*/

/*
function click(event){
    console.log('almafa')
    event.target.removeEventListener('click', click)
}



let a = document.createElement('p')

a.innerHTML = 'én egy gomb vagyok'

a.addEventListener('click', click)

document.querySelector('#main').appendChild(a) */

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}

function click(event){
    if(event.target.classList.contains('selected')){
        event.target.classList.remove('selected')
    }else{
        event.target.classList.add('selected')
    }
}

const adatok = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
]

let ul = document.querySelector('#main')

for(const elem of adatok){
    let li = document.createElement('li')
    li.innerText = elem
    li.dataset.og = elem
    ul.appendChild(li)
}

delegal(ul, 'li', 'click', click)

document.querySelector('#rename').addEventListener('click', ()=>{
    let newName = document.querySelector('#newname')
    document.querySelectorAll('.selected').forEach(elem => elem.innerText = newName.value)
})

document.querySelector('#reset').addEventListener('click', ()=>{
    document.querySelectorAll('.selected').forEach(elem => {
        elem.innerText = elem.dataset.og
        elem.style.color = 'black'
    })
})

document.querySelector('#recolor').addEventListener('click', ()=>{
    let newName = document.querySelector('#newcolor')
    let color = 'black'
    switch (newName.value) {
        case 'zöld':
            color = 'green'
            break;
        case 'piros':
            color = 'red'
            break;
        case 'kék':
            color = 'blue'
            break;
    }
    document.querySelectorAll('.selected').forEach(elem => elem.style.color = color)
})