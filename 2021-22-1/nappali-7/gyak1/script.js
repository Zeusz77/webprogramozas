console.log('12')

let a = 5

let b = 'a'

console.log(b)

console.log(a + 3)

let tomb = ['barackfa', 12, true] //Tömb


let obj = { 
    nev: 'Ferike', 
    kor: 18,
    nem: 'n/a'
}

console.log(obj['nev'])

let szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let elem of szamok){
    console.log(elem)
}

for(let elem in szamok){
    console.log(elem)
}

console.log(`Ferike életkora ${obj.kor}`)

let filmek = [
    {cim: 'Tenet',
    megjelent: 2020}, 
    {cim: 'öngyilkos osztag',
    megjelent: 2021},
    {
        cim: 'Szürke ötven árnyalat',
        megjelent: 2012
    },
    {
        cim: 'Aranyhaj',
        megjelent: 1800
    },
    {
        cim: 'starwars',
        megjelent: 1980
    }
]

function nevelo(){
    return 'A(z)'
}

let maganhangzok = ['A', 'E', 'I', 'O', 'Ö', 'Ü', 'U', 'Í', 'É', 'Á', 'Ű', 'Ú', 'Ó', 'Ő']

function nevelo2(cim){
    if(cim[0] == 'Ö'){
        return 'Az'
    }
    return 'A'
}

function nevelo3(cim){
    let van = false;
    for(let i = 0; i < maganhangzok.length && !van; i++){
        if(maganhangzok[i] == cim[0]){
            van = true
        } 
    }

    if(van){
        return 'Az'
    }
    return 'A'
}

let maganhangzok2 = 'AEIOÖÜÓŐÚŰÁÉÍU'

function nevelo4(cim){
    if(maganhangzok2.includes(cim[0].toUpperCase())){
        return 'Az'
    }
    return 'A'
}

function nevelo5(cim){
    return maganhangzok2.includes(cim[0].toUpperCase()) ? 'Az' : 'A'
}

/*
for(let elem of filmek){
    console.log(`${nevelo5(elem['cim'])} ${elem['cim']} megjelnt: ${elem['megjelent']}`)
}

tomb.push('Barackfa')

console.log(tomb)

*/

filmek.filter(elem => elem.megjelent > 2000).forEach(elem2 => console.log(`${elem2.cim} megjelent: ${elem2.megjelent}`))

let tomb2 = [5, 4, 6, 7, 8, 2, 6, 8, 2, 6, 7, 2]

let tomb3 = [{
    nev: 'Ferike',
    kor: 13
},
{
    nev: 'big g', 
    kor: 30
},
{
    nev: 'béla',
    kor: 400
}
]

function add(a, b){
    return a+b.kor
}

function add2(a, b){
    return a+b
}

console.log(tomb3.reduce(add, 0), tomb2.reduce((add2)))