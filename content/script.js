
// THIS IS FOR THE FIRST TABLE

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Gray', 'Black'];
const rows = 10; 
let usedColors = [];

function updateTable() {
    const rowCountInput = document.getElementById('rowCount');
    const rowCount = parseInt(rowCountInput.value);
    if (isNaN(rowCount) || rowCount < 1 || rowCount > 10) {
        alert('Please enter a number between 1 and 10.');
        return;
    }

    clearTable();
    populateColorTable(rowCount);
}

function clearTable() {
    const colorTableBody = document.getElementById('colorTableBody');
    colorTableBody.innerHTML = '';
}

function populateColorTable(rowCount) {
    const colorTableBody = document.getElementById('colorTableBody');
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        const colorCell = document.createElement('td');
        const dropdown = document.createElement('select');
        dropdown.classList.add('color-selector');
        dropdown.addEventListener('change', handleColorChange);
        populateDropdown(dropdown, i);
        colorCell.appendChild(dropdown);
        row.appendChild(colorCell);
        row.appendChild(document.createElement('td'));
        colorTableBody.appendChild(row);
    }
}

function populateDropdown(dropdown, index) {
    colors.forEach((color, i) => {
        if (!usedColors.includes(color)) {
            const option = document.createElement('option');
            option.value = color;
            option.text = color;
            dropdown.appendChild(option);
        }
    });
  
    if (index < colors.length) {
        dropdown.value = colors[index];
        usedColors.push(colors[index]);
    }
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

 
    if (selectedColor !== 'Pick a color') {
        usedColors.push(selectedColor);
        event.target.dataset.previousColor = selectedColor;
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

// ^^^^^ FOR FIRST TABLE