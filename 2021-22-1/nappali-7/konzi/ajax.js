const bagSelect = document.querySelector('#bag')
const countInput = document.querySelector('#count')
const resultSpan = document.querySelector('#error')
const removeButton = document.querySelector('#remove')
const placeButton = document.querySelector('#place')


function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

function frissit(data){
    let bag1 = document.querySelector('#bag1')
    let bag2 = document.querySelector('#bag2')
    let bag3 = document.querySelector('#bag3')
    bag1.innerHTML = data.bag1
    bag2.innerHTML = data.bag2
    bag3.innerHTML = data.bag3
    if(parseInt(data.bag1) > 150) bag1.style.color = 'red'
    if(parseInt(data.bag2) > 150) bag2.style.color = 'red'
    if(parseInt(data.bag3) > 150) bag3.style.color = 'red'
    document.querySelector('#used').innerHTML = data.used
    document.querySelector('#error').innerHTML = data.hiba
}

removeButton.addEventListener('click', ()=>{
    fetchke(`update.php?bag=bag${bagSelect.value}&ammount=${countInput.value}&tranzaction=remove`, frissit)
})

placeButton.addEventListener('click', ()=>{
    fetchke(`update.php?bag=bag${bagSelect.value}&ammount=${countInput.value}&tranzaction=place`, frissit)
})

console.log('data')