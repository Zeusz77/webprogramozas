let body = document.querySelector('body')

body.innerHTML = '<ul><li>Szöveg szerü valami</li></ul>'

let p1 = document.createElement('p')
p1.innerHTML = 'Narancssárga kommunizmus'

body.appendChild(p1)

const header = ['Név', 'Ár', 'Legnagyobbb fogyasztó']

const furries = ['Bucsi']

const data = [
    {
        nev: 'Kevert',
        ar: 390,
        lf: 'Norbi'
    },
    {
        nev: 'Száraz fehér Vice Folyóborból',
        ar: 550,
        lf: 'Zus'
    },
    {
        nev: 'Jägermeister',
        ar: 680,
        lf: 'Kacs'
    },
    {
        nev: 'Vodkanari',
        ar: 780,
        lf: 'Bucsi'
    }
]

let table = document.createElement('table')

let htr = document.createElement('tr')

for(let h of header){
    let th = document.createElement('th')
    th.innerHTML = h
    htr.appendChild(th)
}

table.appendChild(htr)

data.forEach(element => {
    let tr = document.createElement('tr')
    tr.innerHTML = `<td>${element.nev}</td><td>${element.ar}</td><td>${element.lf}</td>`
    tr.style.backgroundColor = element.ar > 600 ? 'red' : ''
    tr.style.fontStyle = furries.includes(element.lf) ? 'italic' : ''
    table.appendChild(tr)
})

let input = document.createElement('input')
let button = document.createElement('button')
let p = document.createElement('p')
p.innerHTML = 0
button.innerHTML = 'Felüt'

button.addEventListener('click', (event)=>{
    console.log(event)
    console.log(button)
    console.log(document.querySelectorAll('td'))
    if(Number.isInteger(parseInt(input.value))) p.innerHTML = parseInt(p.innerHTML) +  parseInt(input.value)
    input.value = ''
})

body.appendChild(table)

body.appendChild(input)
body.appendChild(button)
body.appendChild(p)