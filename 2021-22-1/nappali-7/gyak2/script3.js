let tomb = [
    {
        szoveg: 'A kódom',
        tipus: 'barkacs'
    },
    {
        szoveg: 'A maximumkiválasztás progtétel',
        tipus: 'helyes'
    },
    {
        szoveg: 'Lorem Ipsum',
        tipus: 'helyes'
    },
    {
        szoveg: 'Suicide Squad',
        tipus: 'barkacs'
    }
]

let lista = document.createElement('ul')

tomb.forEach(elem => {
    let pont = document.createElement('li')
    pont.innerHTML = elem['szoveg']
    pont.dataset.tipus = elem['tipus']
    lista.appendChild(pont)
})

document.body.appendChild(lista)

document.querySelectorAll('li').forEach(elem => {
    elem.style.color = elem.dataset.tipus == 'helyes' ? 'green' : 'red'
})

console.log(document.querySelector('p'))

console.log(document.querySelectorAll('p'))