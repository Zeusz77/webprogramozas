let a = 420
let b = "fa"
let c = [1, 2, 3, 4, "alma", "körte"]

console.log(a, b)
console.log(c)

let fak = ["alma", "körte", "barack", "szilva"]

for(let i = 0; i < fak.length; i = i + 1){
    console.log(fak[i] + "fa")
}

for(let i = 0; i < fak.length; i++) console.log(fak[i] + b)

for(let elem in fak) console.log(fak[elem] + b)

let obj = {
    "key" : "value",
    "key2" : a,
    "key3" : c
}

console.log(obj.key)
console.log(obj['key2'])

/*let pelda = [
    {
        "hallgato" : "Gerely Viktor András",
        "atlag" : 1.23
    },
    {
        "hallgato" : "Bucsánszki Tamás Mihály",
        "atlag" : 0.2
    },
    {
        "hallgato" : "Deák Dalma",
        "atlag" : 4.0
    }
]

function legjobbatlag(tomb){
    let max = tomb[0]
    for (let i = 1; i < tomb.length; i++) {
        if(max.atlag < tomb[i].atlag){
            max = tomb[i]
        }
    }
    return max
}

console.log(legjobbatlag(pelda))*/

let pelda = [
    {
        "hallgato" : "Gerely Viktor András",
        "atlag" : 1.23,
        "szuletett" : 1996
    },
    {
        "hallgato" : "Bucsánszki Tamás Mihály",
        "atlag" : 0.2,
        "szuletett" : 1994
    },
    {
        "hallgato" : "Deák Dalma",
        "atlag" : 4.0,
        "szuletett" : 2000
    },
    {
        "hallgato" : "Franta Áron",
        "atlag" : 3.0,
        "szuletett" : 1999
    },
    {
        "hallgato" : "Franta Ákos",
        "atlag" : 0,
        "szuletett" : 2003
    }
]

/*function legjobbatlag_2000_Utan(tomb){
    let temp = tomb.filter(elem => elem.szuletett >= 2000)
    console.log(temp)
    let max = temp[0]
    for (let i = 1; i < temp.length; i++) {
        if(max.atlag < temp[i].atlag){
            max = temp[i]
        }
    }
    return max
}

console.log(legjobbatlag_2000_Utan(pelda))*/

/*function tmp(prev, next){
    return prev.atlag > next.atlag ? prev : next
}

function legjobbatlag_2000_Utan(tomb){
    return tomb.filter(elem => elem.szuletett >= 2000).reduce(tmp)
}

console.log(legjobbatlag_2000_Utan(pelda))*/

function legjobbatlag_2000_Utan(tomb){
    return tomb.filter(elem => elem.szuletett >= 2000).reduce((prev, next) => prev.atlag > next.atlag ? prev : next)
}

console.log(legjobbatlag_2000_Utan(pelda))

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

console.log(filmek.reduce((a, b) => {
    return a + b.jegyar
, 0})) 