console.log(15)

let a = 15
let b = '15'
let c = 3

console.log(a + b)
console.log(a + c)

let tomb = [1, 2, 3, 4, 5, 6, 7]

/*for(let i = 0; i < tomb.length; i++){
    console.log(tomb[i])
}*/

/*for(let elem of tomb){
    console.log(elem)
}*/

for(let elem in tomb){
    console.log(elem)
}

let objektum = {
    kulcs: 'érték',
    név: 'Béla',
    szuletett: 1999
}

console.log(objektum['kulcs'])
console.log(objektum.kulcs)

let objtomb = [
    {
        varos: 'Buda',
        keruletekszama: 24
    },
    {
        nev: 'Pistike',
        ev: 1999
    }
]

console.log(objtomb)

for(let elem in objektum){
    console.log(objektum[elem])
}

let filmek = [
    {
        cim: 'Tenet',
        jegyar: 2000,
        ferohely: 250,
        teremszam: 12
    },
    {
        cim: 'Öngyilkos Osztag',
        jegyar: 1700,
        ferohely: 150,
        teremszam: 11
    },
    {
        cim: 'Star Wars: The Retunr of the Jedi',
        jegyar: 2200,
        ferohely: 250,
        teremszam: 21
    },
    {
        cim: 'Inception',
        jegyar: 2500,
        ferohely: 300,
        teremszam: 1
    }
]

function egy(){
    return 'A(z)'
}

function ketto(cim){
    if(cim[0] == 'I'){
        return 'Az'
    }
    return 'A'
}

const maganhangzok = 'EUIOÖÜÓŐÚAÉÁŰÍ'

function harom(cim){
    let van = false

    for(let i = 0; i < maganhangzok.length && !van; i++){
        if(cim[0] == maganhangzok[i]){
            van = true
        }
    }
    if(van){
        return 'Az'
    }
    return 'A'
}

function negy(cim){
    if(maganhangzok.includes(cim[0])){
        return 'Az'
    }
    return 'A'
}
 
function ot(cim){
    return maganhangzok.includes(cim[0].toUpperCase()) ? 'Az' : 'A'
}

for (let elem of filmek){
    console.log(`${ot(elem.cim)} ${elem.cim} a ${elem.teremszam}. teremben játszák`)
}

console.log(filmek.filter(elem => elem.jegyar > 2100))

filmek.forEach(elem => console.log(elem))

filmek.filter(elem => elem.jegyar > 2100).forEach(elem => console.log(`${ot(elem.cim)} ${elem.cim} a ${elem.teremszam}. teremben játszák`))


console.log(filmek.reduce((a, b) => {
    return a + b.jegyar
}, 0))
