let table = document.querySelector('#table')

function fetchke(celnev, fugveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fugveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fugveny(e))
}

function listaz(filmek){
    table.innerHTML = '<tr><th>Cím</th><th>Előadó</th><th>Év</th><th>Link</th></tr>'
    for(const data of filmek){
        let row = document.createElement('tr')
        row.innerHTML = `<td>${data.cim}</td><td>${data.eloado}</td><td>${data.ev}</td><td><a href="${data.link}">▶</a></td>`
        table.appendChild(row)
    }
}

document.querySelector('#refresh').addEventListener('click', ()=>fetchke('fetch.php', listaz))

window.addEventListener('load', ()=>fetchke('fetch.php', listaz))