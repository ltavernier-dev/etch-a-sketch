function deleteCurrentGrid() {
    const gridNodes = document.querySelector('#grid-container').childNodes;
    gridNodes.forEach(node => node.parentNode.removeChild(node));
}

function createGrid(size) {
    deleteCurrentGrid();

    // Creation of new grid
    const grid = document.querySelector('#grid-container');
    for (let l=0; l<size; l++) {
        const line = document.createElement('div');
        line.classList.add('line');
        
        for (let c=0; c<size; c++) {
            const box = document.createElement('div');
            box.classList.add('box');
            line.appendChild(box);
        }
        grid.appendChild(line);
    }
}

createGrid(10);