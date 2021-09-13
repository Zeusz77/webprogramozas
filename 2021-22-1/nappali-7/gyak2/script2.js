let szoveg = 'A hibrid oktatás nagyon jó :)'

for(let i = 10; i < 100; i+=10){
    let bekezdes = document.createElement('p')
    bekezdes.innerHTML = szoveg
    bekezdes.style.fontSize = `${i}px`
    bekezdes.style.color = `#FF${i}FF`
    
    document.body.appendChild(bekezdes)
}

