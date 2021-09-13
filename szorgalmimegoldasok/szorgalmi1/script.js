const tomb = [
    {
        id: 1001,
        nev: 'Lanyesz',
        szuletett: 1997,
        kereset: 2000000
    },
    {
        id: 1002,
        nev: 'Laurka',
        szuletett: 1995,
        kereset: 223003
    },
    {
        id: 1212,
        nev: 'Suwu',
        szuletett: 2019,
        kereset: 0
    },
    {
        id: 69420,
        nev: 'Manyesz',
        szuletett: 2001,
        kereset: 43202
    },
    {
        id: 191114,
        nev: 'Thoca', 
        szuletett: 2069,
        kereset: 2300000
    },
    {
        id: 1111,
        nev: 'Mészi',
        szuletett: 1999,
        kereset: 65000
    },
]

tomb.filter(elem => elem.szuletett < 2000).forEach(elem => { console.log(elem.id)
})

const max = tomb.reduce((a, b) => {
    return a.kereset > b.kereset ? a : b
})

console.log(max.nev, max.kereset)

let min  = tomb.filter(elem => elem.szuletett > 2000).reduce((a, b) => {
    return a.kereset < b.kereset ? a : b
})

console.log(min.nev, min.kereset)