const placesInput = document.querySelector('#places')
const speciesInput = document.querySelector('#species')
const button = document.querySelector('#btn-generate')
const tableContainer = document.querySelector('#table-container')
const task1 = document.querySelector('#task-1')
const task2 = document.querySelector('#task-2')
const task3 = document.querySelector('#task-3')
const task4 = document.querySelector('#task-4')
const task5 = document.querySelector('#task-5')


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

let matrix = []

button.addEventListener('click', onGenerate)
function onGenerate(e) {
  const n = placesInput.valueAsNumber
  const m = speciesInput.valueAsNumber

  matrix = generateMatrix(n, m)
  console.log(matrix);
}

function generateMatrix(n, m) {
  const matrix = []
  for(let i = 0; i<n; i++) {
    const row = []
    for(let j = 0; j<m; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  return matrix
}

button.addEventListener('click', drawMatrix)
function drawMatrix(){
  tableContainer.innerHTML = ''
  const n = placesInput.valueAsNumber
  const m = speciesInput.valueAsNumber
  let table = document.createElement('table')
  for(let i = 0; i < n; i++){
    let tr = document.createElement('tr')
    for(let j = 0; j < m; j++){
      let td = document.createElement('td')
      td.innerText = matrix[i][j]
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
  tableContainer.appendChild(table)
  
  delegal(table, 'td', 'click', logBird)

  t1()
  t2()
  t3()
}

function logBird(event){
  let x = event.target.parentNode.rowIndex; let y = event.target.cellIndex
  console.log(x, y)
  matrix[x][y]++
  event.target.innerText = matrix[x][y]

  t1()
  t2()
  t3()
}

function t1(){
  task1.innerText = matrix[0].some(e => e > 0) ? 'Yes' : 'No'
}

function t2(){
  task2.innerText = matrix.filter(e => 
    e.some(elem => elem >= 10)
  ).length
}

function t3(){
  let index = 'No'
  for(let row in matrix){
    if(matrix[row].every(e => e == 0)){
      index = row
      break
    }
  }
  task3.innerText = index
}