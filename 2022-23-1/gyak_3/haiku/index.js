const txtr = document.querySelector('#haiku-editor')
const nmbrfc = document.querySelector('#number-of-characters')
const nmbrfr = document.querySelector('#number-of-rows')
const vpr = document.querySelector('#vowels-per-row')
const pre = document.querySelector('#haikus')

let vowels = 'aáeéiíoóöőuúüű'

txtr.addEventListener('input', ()=>{
    let value = txtr.value.toLowerCase()

    console.log(value)
    nmbrfc.innerHTML = value.length

    let rows = value.split('\n')
    nmbrfr.innerHTML = rows.length

    console.log(rows[0].split('').filter(e => vowels.includes(e)).length)

    vpr.innerHTML = ''
    for(let i in rows){
        let li = document.createElement('li')
        li.innerHTML = rows[i].split('').filter(e => vowels.includes(e)).length
        vpr.appendChild(li)
    }

    if(
        rows.length == 3
        && rows[0].split('').filter(e => vowels.includes(e)).length == rows[2].split('').filter(e => vowels.includes(e)).length
        && rows[0].split('').filter(e => vowels.includes(e)).length == 5
        && rows[1].split('').filter(e => vowels.includes(e)).length == 7
    )
    {
        txtr.parentNode.classList.add('haiku')
    }else{
        txtr.parentNode.classList.remove('haiku')
    }
})

document.querySelector('#btn-copy-haiku').addEventListener('click', ()=>{
    let p = document.createElement('pre')
    p.innerHTML = txtr.value
    pre.appendChild(p)
})