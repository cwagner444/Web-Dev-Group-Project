// THIS IS FOR TABLE ONE


const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Gray', 'Black'];
const rows = 10; 
let usedColors = [];
let lastSelColorIndex = 0;

function updateColorTable() {
    const rowCntInput = document.getElementById('rowCnt');
    const rowCnt = parseInt(rowCntInput.value);
    if (isNaN(rowCnt) || rowCnt < 1 || rowCnt > 10) {
        alert('Please enter a number between 1 and 10 for the color table.');
        return;
    }

    clearColorTable();
    populateColrTable(rowCnt);
}

function clearColorTable() {
    const colorTableBody = document.getElementById('colorTableBody');
    colorTableBody.innerHTML = '';
    usedColors = []; 
}

function populateColrTable(rowCnt) {
    const colorTableBody = document.getElementById('colorTableBody');


    for (let i = 0; i < rowCnt; i++) {
        const row = document.createElement('tr');
        const colorCell = document.createElement('td');
        const dropdown = document.createElement('select');
        dropdown.classList.add('color-selector');
        dropdown.addEventListener('change', handleColorChange);
        populateDropdown(dropdown);
        colorCell.appendChild(dropdown);
        row.appendChild(colorCell);
        row.appendChild(document.createElement('td'));
        colorTableBody.appendChild(row);
    }


    const allDropdowns = document.querySelectorAll('.color-selector');
    allDropdowns.forEach(dropdown => {
        const defCol = dropdown.querySelector('option').value;
        usedColors.push(defCol);
    });


    allDropdowns.forEach(dropdown => {
        const options = dropdown.querySelectorAll('option');
        options.forEach(option => {
            if (usedColors.includes(option.value)) {
                option.disabled = true;
            }
        });
    });
}

function populateDropdown(dropdown) {
    const startIndex = lastSelColorIndex % colors.length;
    const defColIndex = startIndex % colors.length;
    const defCol = colors[defColIndex];

    for (let i = 0; i < colors.length; i++) {
        const colorIndex = (startIndex + i) % colors.length;
        const color = colors[colorIndex];
        const option = document.createElement('option');
        option.value = color;
        option.text = color;


        if (usedColors.includes(color) && color !== defCol) { /// IS THIS WORKING????
            option.disabled = true;
        }

        dropdown.appendChild(option);
    }
    lastSelColorIndex++;

   
    dropdown.dataset.prevColor = defCol;
}

function handleColorChange(event) {
    const selColor = event.target.value;
    const prevColor = event.target.dataset.prevColor;

    if (prevColor !== undefined && prevColor !== selColor) {
        const index = usedColors.indexOf(prevColor);
        if (index !== -1) {
            usedColors.splice(index, 1);
        }
    }

    if (!usedColors.includes(selColor)) {
        usedColors.push(selColor);
    }


    event.target.dataset.prevColor = selColor;


    const allDropdowns = document.querySelectorAll('.color-selector');
    allDropdowns.forEach(dropdown => {
        const options = dropdown.querySelectorAll('option');
        options.forEach(option => {
            if (option.value === selColor) {
                option.disabled = true;
            } else {
                option.disabled = usedColors.includes(option.value);
            }
        });
    });
}

populateColrTable(rows);

/// ^^^^^^ THIS IS FOR TABLE ONE




/// THIS IS FOR TABLE TWO



function updateAlphabetTable() {
    const rowCountInput = document.getElementById('tableTwoRowCount');
    const rowCount = parseInt(rowCountInput.value);
    if (isNaN(rowCount) || rowCount < 1 || rowCount > 26) {
        alert('Please enter a number between 1 and 26 for the alphabet table.');
        return;
    }

    clearAlphabetTable();
    populateAlphabetTable(rowCount);
}

function clearAlphabetTable() {
    const alphabetTable = document.getElementById('alphabetTable');
    alphabetTable.innerHTML = '';
}

function populateAlphabetTable(rowCount) {
    const alphabetTable = document.getElementById('alphabetTable');

    
    const headerRow = document.createElement('tr');
    for (let i = 0; i <= rowCount; i++) {
        const cell = document.createElement('td');
        if (i > 0) {
            cell.textContent = String.fromCharCode(64 + i);
        }
        headerRow.appendChild(cell);
    }
    alphabetTable.appendChild(headerRow);

  
    for (let i = 1; i <= rowCount; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j <= rowCount; j++) {
            const cell = document.createElement('td');
            if (j === 0) {
                cell.textContent = i;
            }
            row.appendChild(cell);
        }
        alphabetTable.appendChild(row);
    }
}


/// ^^^^^ THIS IS TABLE TWO