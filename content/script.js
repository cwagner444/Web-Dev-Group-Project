// THIS IS FOR TABLE ONE


const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Gray', 'Black'];
const rows = 10; 
let usedColors = [];
let lastSelectedColorIndex = 0;

function updateColorTable() {
    const rowCountInput = document.getElementById('rowCount');
    const rowCount = parseInt(rowCountInput.value);
    if (isNaN(rowCount) || rowCount < 1 || rowCount > 10) {
        alert('Please enter a number between 1 and 10 for the color table.');
        return;
    }

    clearColorTable();
    populateColorTable(rowCount);
}

function clearColorTable() {
    const colorTableBody = document.getElementById('colorTableBody');
    colorTableBody.innerHTML = '';
    usedColors = []; 
}

function populateColorTable(rowCount) {
    const colorTableBody = document.getElementById('colorTableBody');
    for (let i = 0; i < rowCount; i++) {
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
}

function populateDropdown(dropdown) {
    const startIndex = lastSelectedColorIndex % colors.length;
    for (let i = 0; i < colors.length; i++) {
        const colorIndex = (startIndex + i) % colors.length;
        const color = colors[colorIndex];
        const option = document.createElement('option');
        option.value = color;
        option.text = color;
        dropdown.appendChild(option);
    }
    lastSelectedColorIndex++;
}

function handleColorChange(event) {
    const selectedColor = event.target.value;
    const previousColor = event.target.dataset.previousColor;

  
    if (previousColor) {
        const index = usedColors.indexOf(previousColor);
        if (index !== -1) {
            usedColors.splice(index, 1);
        }
    }

    const allDropdowns = document.querySelectorAll('.color-selector');
    allDropdowns.forEach(dropdown => {
        if (dropdown !== event.target) {
            const options = dropdown.querySelectorAll('option');
            options.forEach(option => {
                if (option.value === selectedColor) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });
        }
    });
}

populateColorTable();

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