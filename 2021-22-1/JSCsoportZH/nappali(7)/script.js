const players = [
    {
        username: "Yumeko",
        dollars: 10000,
        euros: 4000
    },
    {
        username: "meemboi",
        dollars: 4000,
        euros: 2172
    },
    {
        username: "boionbike",
        dollars: 3401,
        euros: 1200
    },
    {
        username: "Zeusz77",
        dollars: 3456,
        euros: 2034
    },
    {
        username: "PotatoMaster",
        dollars: 0,
        euros: 0
    },
    {
        username: "Gremory",
        dollars: 500,
        euros: 467
    }
]

const header = ["Name", "Dollars", "Euros"]

let hRow = document.createElement('tr')
hRow.classList.add('header')
header.forEach(elem => {
    let h = document.createElement('th')
    h.innerHTML = elem
    hRow.appendChild(h)
})

let table = document.querySelector('table')
table.appendChild(hRow)

function currency(str){
    if(str == 'roubles') return '₽'
    if(str == 'dollars') return '$'
    if(str == 'euros') return '€'
}

players.forEach(player => {
    let row = document.createElement('tr')
    for(const key in player){
        let data = document.createElement('td')
        if(key == 'username'){
            data.innerHTML = player[key]
        }else{
            data.innerHTML = `<span class="${key}">${player[key]}</span> ${currency(key)}`
        }
        row.appendChild(data)
    }
    table.appendChild(row)
})

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

function select(event, target){
    target.classList.toggle('selected')
}

function changeToDollar(euro){
    return euro * 1.16
}

function cahngeToEuro(dollar){
 return dollar * 0.86
}

delegal(table, 'tr:not(.header)', 'click', select)

let input = document.querySelector('input')
let dte = document.querySelector('#dte')
let etd = document.querySelector('#etd')

dte.addEventListener('click', ()=>{
    document.querySelectorAll('.selected').forEach(elem =>{
        let d = elem.querySelector('.dollars')
        let e = elem.querySelector('.euros')
        if( parseFloat(d.innerHTML) >= parseFloat(input.value)){
            d.innerHTML = parseFloat(d.innerHTML) - parseFloat(input.value)
            e.innerHTML = (cahngeToEuro(parseFloat(input.value))*0.95) + parseFloat(e.innerHTML)
        }
    })
})

etd.addEventListener('click', ()=>{
    document.querySelectorAll('.selected').forEach(elem =>{
        let d = elem.querySelector('.dollars')
        let e = elem.querySelector('.euros')
        if(parseFloat(e.innerHTML) >= parseFloat(input.value)){
            e.innerHTML = parseFloat(e.innerHTML) - parseFloat(input.value)
            d.innerHTML = (changeToDollar(parseFloat(input.value))*0.95) + parseFloat(d.innerHTML)
        }
    })
})