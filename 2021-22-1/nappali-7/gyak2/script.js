const header = ['Cegnev', 'Adoszam', 'Ipar']

const cegek = [
    {
        Cegnev: 'HZ Kft',
        Adoszam: '111111',
        Ipar: 'IT'
    }, 
    {
        Cegnev: 'Deak és Társai Zrt',
        Adoszam: '666666',
        Ipar: 'Fashion'
    },
    {
        Cegnev: 'ELTE IK',
        Adoszam: '000000',
        Ipar: 'IT'
    }
]

let tablazat = document.createElement('table')

let headerSor = document.createElement('tr')

header.forEach(element => {
    let sor = document.createElement('th')
    sor.innerHTML = element
    headerSor.appendChild(sor)
})

tablazat.appendChild(headerSor)

cegek.forEach(element => {
    let ujsor = document.createElement('tr')
    /*header.forEach(elem => {
        let ujelem = document.createElement('td')
        ujelem.innerText = element[elem]
        ujsor.appendChild(ujelem)
    })*/
    ujsor.innerHTML = `<td>${element.Cegnev}</td><td>${element.Adoszam}</td><td>${element.Ipar}</td>`
    //ujsor.innerHTML = header.reduce((a, b) =>{ return a + `<td>${element[b]}</td>`}, '')
    tablazat.appendChild(ujsor)
})


document.body.appendChild(tablazat)