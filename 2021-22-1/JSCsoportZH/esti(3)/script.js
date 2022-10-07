const data = [
    {
        name: 'Slick',
        durability: 80,
        class: 6
    },
    {
        name: '6B2',
        durability: 80,
        class:2 
    },
    {
        name: '6B23-1',
        durability: 80,
        class:3
    },
    {
        name: '6B13',
        durability: 47,
        class:4
    },
    {
        name: 'Trooper TFO',
        durability: 85,
        class:4
    },
    {
        name: '5.11 Hexgrid',
        durability: 50,
        class:6
    }
]

const header = ['Név', 'Állapot', 'Szívosság']

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

let table = document.querySelector('table')
let shoot = document.querySelector('#pew')
let repair = document.querySelector('#repair')

let hRow = document.createElement('tr')
header.forEach(elem => {
    let h = document.createElement('th')
    h.innerHTML = elem
    hRow.appendChild(h)
})
hRow.classList.add('header')
table.appendChild(hRow)

data.forEach(elem => {
    let row = document.createElement('tr')
    let d1 = document.createElement('td')
    let d2 = document.createElement('td')
    d2.dataset.og = elem.durability
    d2.dataset.class = elem.class
    d2.classList.add('need')
    let d3 = document.createElement('td')
    d1.innerHTML = elem.name
    d2.innerHTML = elem.durability
    d3.innerHTML = elem.class
    row.appendChild(d1)
    row.appendChild(d2)
    row.appendChild(d3)
    table.appendChild(row)
})

function select(event, elem){
    if(!elem.classList.contains('header')){
        elem.classList.toggle('selected')
    }
}

delegal(table, 'tr', 'click', select)

shoot.addEventListener('click', (event)=>{
    table.querySelectorAll('.selected').forEach(elem => {
        let need = elem.querySelector('.need')
        let input = parseInt(document.querySelector('#ammo').value)
        if(input > parseInt(need.dataset.class)){
            let num = input - (parseInt(need.dataset.class))
            if(parseInt(need.innerHTML) - num <= 0){
                need.innerHTML = 0
            }else{
                need.innerHTML = parseInt(need.innerHTML) - num
            }
        }
    })
})

repair.addEventListener('click', ()=>{
    table.querySelectorAll('.selected').forEach(elem => {
        let need = elem.querySelector('.need')
        need.innerHTML = need.dataset.og
    })
})