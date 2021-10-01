/*const animals = [
    {
        nev: 'Vilmos',
        faj: 'medve',
        latogatok: 5
    },
    {
        nev: 'Gergő',
        faj: 'mókus',
        latogatok: 15
    },
    {
        nev: 'Timi',
        faj: 'hörcsög',
        latogatok: 1
    }
]

let main = document.createElement('div')

for(const animal of animals){
    let p = document.createElement('p')
    p.innerHTML += animal.nev
    p.innerHTML += ' '
    p.innerHTML += animal.faj
    p.innerHTML += ' '
    let span = document.createElement('span')
    span.dataset.animal = animal.nev
    span.innerText = animal.latogatok
    let button = document.createElement('button')
    button.innerText = '+'
    button.addEventListener('click', (event)=>{
        //span.innerText = (parseInt(span.innerText) + 1)
        document.querySelector(`[data-animal="${animal.nev}"]`).innerText = parseInt(document.querySelector(`[data-animal="${animal.nev}"]`).innerText) + 1
    })
    p.appendChild(span)
    p.innerHTML += ' '
    p.appendChild(button)
    main.appendChild(p)
}

document.body.appendChild(main)*/
/*
const countries = [
    {
        orszag: 'Németország',
        varos: 'Berlin'
    },
    {
        orszag: 'Németország',
        varos: 'München'
    },
    {
        orszag: 'Németország',
        varos: 'Königsberg'
    },
    {
        orszag: 'Franciaország',
        varos: 'Párizs'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'London'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Dublin'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Hong Kong'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Delhi'
    },
    {
        orszag: 'Ausztria',
        varos: 'Bécs'
    },
    {
        orszag: 'Ausztria',
        varos: 'Pozsony'
    },
    {
        orszag: 'Ausztria',
        varos: 'Budapest'
    },
    {
        orszag: 'Oroszország',
        varos: 'Moszkva'
    },
    {
        orszag: 'Oroszország',
        varos: 'Kijev'
    },
    {
        orszag: 'Oroszország',
        varos: 'Varsó'
    },
]

let button = document.querySelector('#button')
let ul = document.createElement('ul')

function searchCountry(event){
    let input = document.querySelector('#input')
    let select = document.querySelector('ul')
    select.innerHTML = ''
    countries.filter(elem => elem.orszag == input.value).forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.varos
        select.appendChild(li)
    })
    document.querySelector('#button').removeEventListener('click', searchCountry)
}

button.addEventListener('click', searchCountry)

document.body.appendChild(ul)*/

const palces = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
]

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

let list = document.querySelector('#list')

palces.forEach(elem => {
    let li = document.createElement('li')
    li.innerHTML = elem
    li.dataset.og = elem
    list.appendChild(li)
})

function select(event, elem){
    elem.classList.toggle('selected')
}

delegal(list, 'li', 'click', select)

document.querySelector('#rename').addEventListener('click', (event)=>{
    let txt = document.querySelector('#newname').value
    document.querySelectorAll('.selected').forEach(elem => elem.innerHTML = txt)
})

document.querySelector('#reset').addEventListener('click', (event)=>{
    document.querySelectorAll('.selected').forEach(elem => {
        elem.innerHTML = elem.dataset.og
        elem.style.color = 'black'
    })
})

document.querySelector('#recolor').addEventListener('click', (event)=>{
    let color = document.querySelector('#newcolor').value
    document.querySelectorAll('.selected').forEach(elem => {
        switch (color) {
            case 'piros':
                elem.style.color = 'red'
                break;
    
            case 'kék':
                elem.style.color = 'blue'
                break;
    
            case 'zöld':
                elem.style.color = 'green'
                break;
        }
    })
   
})