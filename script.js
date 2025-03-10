// Initialize the dropdown with stored sheets on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDropdown();
    reloadData(); // Load data on page load
});

// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to store the Sheet ID locally
function storeSheetId() {
    const sheetId = document.getElementById('sheetIdInput').value;
    if (sheetId) {
        let storedSheets = JSON.parse(localStorage.getItem('sheetIds')) || [];
        storedSheets.push(sheetId);
        localStorage.setItem('sheetIds', JSON.stringify(storedSheets));
        updateDropdown();
        closePopup();
    }
}

// Function to update the dropdown menu based on stored sheet IDs
function updateDropdown() {
    const dropdown = document.getElementById('sheetDropdown');
    dropdown.innerHTML = '<option value="" disabled selected>Select a Sheet</option>';
    const storedSheets = JSON.parse(localStorage.getItem('sheetIds')) || [];

    storedSheets.forEach(sheetId => {
        getTabName(sheetId, function(tabName) {
            const option = document.createElement('option');
            option.value = sheetId;
            option.textContent = tabName;
            dropdown.appendChild(option);
        });
    });
}

// Function to fetch the first tab name from the Google Sheets API
function getTabName(sheetId, callback) {
    const apiUrl = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?action=getTabName&spreadsheetId=${sheetId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.tabName) {
                callback(data.tabName);
            } else {
                console.error('Tab name not found in the response.');
            }
        })
        .catch(error => {
            console.error('Error fetching tab name:', error);
        });
}

// Event listener to update the sheet data when a new sheet is selected
document.getElementById('sheetDropdown').addEventListener('change', function() {
    const selectedSheetId = this.value;
    localStorage.setItem('selectedSheetId', selectedSheetId);
    updateStatus(selectedSheetId);
    getAttributes(selectedSheetId); // Corrected to getAttributes
});

// Function to load the selected sheet data 
function reloadData() {
    const selectedSheetId = localStorage.getItem('selectedSheetId');
    if (selectedSheetId) {
        getStatus(selectedSheetId);
        getAttributes(selectedSheetId); // Corrected to getAttributes
    }
}

// Function to get the status values
function getStatus(sheetId) {
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?action=getSatus&spreadsheetId=${sheetId}`; // Corrected to getSatus

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('statusHp').textContent = `${data.currentHp}/${data.totalHp}`;
            document.getElementById('statusMana').textContent = `${data.currentMana}/${data.totalMana}`;
            document.getElementById('statusEnergia').textContent = `${data.currentEnergia}/${data.totalEnergia}`;
            document.getElementById('statusAlma').textContent = `${data.currentAlma}/${data.totalAlma}`;
        })
        .catch(error => {
            console.error('Error fetching status data:', error);
        });
}

// Event listener to add or subtract values from the status
document.querySelectorAll('.adjust-button').forEach(button => {
    button.addEventListener('click', function() {
        const cell = this.getAttribute('data-cell');
        const isIncrement = this.textContent === '+';
        const inputValue = parseInt(document.getElementById('inputValue').value) || 1;
        const value = isIncrement ? -inputValue : inputValue;
        updateStatus(cell, value);
        document.getElementById('inputValue').value = 1;
    });
});

function updateStatus(cell, value) {
    const selectedSheetId = localStorage.getItem('selectedSheetId');
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?action=updateStatus&spreadsheetId=${selectedSheetId}&cell=${cell}&value=${value}`;

    fetch(url).finally(() => {
        updateStatus(selectedSheetId);
    });
}

function getAttributes(sheetId) {
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?action=getAttributes&spreadsheetId=${sheetId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('strengthValue').textContent = data.strengthValue;
            document.getElementById('constitutionValue').textContent = data.constitutionValue;
            document.getElementById('dexterityValue').textContent = data.dexterityValue;
            document.getElementById('abilityValue').textContent = data.abilityValue;
            document.getElementById('intelligenceValue').textContent = data.intelligenceValue;
            document.getElementById('charismaValue').textContent = data.charismaValue;
        })
        .catch(error => {
            console.error('Error fetching attributes data:', error);
        });
}