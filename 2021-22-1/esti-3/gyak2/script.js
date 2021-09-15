/*

const header = ['Name', 'Trader', 'Price']

const tartalom = [
{
    Name: 'Bandage',
    Trader: 'Therapist',
    Price: 7800
},
{
    Name: 'Slick',
    Trader: 'Ragmen',
    Price: 200000
},
{
    Name: 'MP-133',
    Trader: 'Jäger',
    Price: 32000
}
]

let table = document.createElement('table')

let headerRow = document.createElement('tr')
for(let elem of header){
    let h = document.createElement('th')
    h.innerText = elem
    headerRow.appendChild(h)
}

table.appendChild(headerRow)

tartalom.forEach(elem => {
    let row = document.createElement('tr')
    header.forEach(h1 => {
        let td = document.createElement('td')
        td.innerText = elem[h1]
        row.appendChild(td)
    })
    row.innerHTML = `<td>${elem['Name']}</td><td>${elem['Trader']}</td><td>${elem['Price']}</td>`
    row.dataset.Trader = elem['Trader']
    table.appendChild(row)
})

document.body.appendChild(table)

const lista = [
    'Alma', 'Körte', 'Barack', 'Banán', 'Eskünemvagyokéhes'
]

let ul = document.createElement('ul')

lista.forEach(elem => {
    let li = document.createElement('li')
    li.innerText = elem
    ul.appendChild(li)
})

document.body.appendChild(ul)



console.log(document.querySelector('h1'))

console.log(document.querySelector('#header'))

console.log(document.querySelector('.bl'))

console.log(document.querySelectorAll('p'))



document.querySelectorAll('tr').forEach(elem => {
    if(elem.dataset.Trader == 'Jäger'){
        elem.style.fontSize = '24px'
    }else if(elem.dataset.Trader == 'Therapist'){
        elem.style.fontStyle = 'Italic'
    }else{
        elem.style.fontWeight = 'bold'
    }
})*/

const tomb = [
    {
        item: 'Alma',
        type: 'gyumolcs'
    },
    {
        item: 'Körte',
        type: 'gyumolcs'
    },
    {
        item: 'Uborka',
        type: 'zoldseg'
    },
    {
        item: 'Kosár',
        type: 'unedible'
    }
]

let ul = document.createElement('ul')

tomb.forEach(elem => {
    let li = document.createElement('li')
    li.innerText = elem.item
    li.dataset.type = elem.type
    ul.appendChild(li)
})

document.body.appendChild(ul)

document.querySelectorAll('li').forEach( elem => {
    switch (elem.dataset.type) {
        case 'gyumolcs':
            elem.style.color = '#004BA8'
            break;
        case 'zoldseg':
            elem.style.color = '#6FEDB7'
            break;
        default:
            elem.style.textDecoration = 'line-through'
            break;
    }
})