/* GRID MANAGEMENT FUNCTIONS */
function deleteCurrentGrid() {
    const grid = document.querySelector('#grid-container');
    while (grid.lastChild) grid.removeChild(grid.lastChild);
}

function createGrid(size) {
    deleteCurrentGrid();

    // Creation of new grid
    const grid = document.querySelector('#grid-container');
    for (let l=0; l<size; l++) {
        const line = document.createElement('div');
        line.classList.add('line', `${l}`);
        if (l == 0) line.classList.add('top');
        
        for (let c=0; c<size; c++) {
            const box = document.createElement('div');
            box.classList.add('box');
            line.appendChild(box);
            if (c == (size - 1) ) box.classList.add('last');
        }
        grid.appendChild(line);
    }
}

/* BOX COLORATION FUNCTIONS*/
function colorBox(e) {
    e.target.classList.add(`${color}`);
}

/* BOX EVENTS */
function addBoxEvent() {
    const gridLines = document.querySelector('#grid-container').childNodes;
    gridLines.forEach(line => line.childNodes.forEach(box => {
        box.addEventListener('mouseover', (e) => colorBox(e))
    }));
}


const SMALL_SIZE = 15;
const MEDIUM_SIZE = 30;
const BIG_SIZE = 50;
let color = 'filled';
let currentSize = MEDIUM_SIZE;

/* INIT */
createGrid(currentSize);
addBoxEvent();



/* BUTTONS GESTION */
const clean = document.querySelector('#clean');
clean.addEventListener('click', (e) => {
    deleteCurrentGrid();
    createGrid(currentSize);
    addBoxEvent();
})

const size = document.querySelector('#size');
size.addEventListener('click', (e) => {
    do {
        currentSize = prompt("Choose new size between 1 and 100");
    } while (currentSize > 100 || currentSize < 0);
    if (currentSize == null || currentSize == 0) currentSize = MEDIUM_SIZE;
    deleteCurrentGrid();
    createGrid(currentSize);
    addBoxEvent();
})
