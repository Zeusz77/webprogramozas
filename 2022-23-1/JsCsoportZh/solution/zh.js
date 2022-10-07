let data = [
    {
    "Name": "Elizabeth Keen",
    "Nick": "Masha",
    "No": 1
    },
    {
    "Name": "Nasim Bakhash",
    "Nick": "The Djin",
    "No": 43
    },
    {
    "Name": "Edgar Grant",
    "Nick": "The Debt Collector",
    "No": 46
    },
    {
    "Name": "Agathe Tyche",
    "Nick": "Lady Luck",
    "No": 69
    },
    {
    "Name": "Chris Farnsworth",
    "Nick": "The Forecaster",
    "No": 163
    }
]

const ul = document.getElementById('ul')
const fullName = document.getElementById('name')
const nick = document.getElementById('nick')
const no = document.getElementById('no')
const button = document.querySelector('button')

for(let elem of data){
    let tmp = document.createElement('li')
    tmp.innerHTML = `Name: ${elem.Name}, Codename: ${elem.Nick}, Number: ${parseInt(elem.No)}`
    ul.appendChild(tmp)
}

button.addEventListener('click', (event)=>{
    if(fullName.value != '' && nick.value != '' && no.value != ''){
        let elem = {
            "Name": fullName.value,
            "Nick": nick.value,
            "No": no.value
        }
        let tmp = document.createElement('li')
        tmp.innerHTML = `Name: ${elem.Name}, Codename: ${elem.Nick}, Number: ${parseInt(elem.No)}`
        ul.appendChild(tmp)
        data.push(elem)
        console.log(data)
    }
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

function help(event){
    event.target.classList.toggle('stroke')
}

delegal(ul, 'li', 'click', help)