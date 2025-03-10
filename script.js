function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to store the Sheet ID locally
function storeSheetId() {
    const sheetId = document.getElementById('sheetIdInput').value;
    if (sheetId) {
        let storedSheets = JSON.parse(localStorage.getItem('sheetIds')) || [];
        // Push the new sheet ID into the array
        storedSheets.push(sheetId);
        // Store the updated list back to localStorage
        localStorage.setItem('sheetIds', JSON.stringify(storedSheets));
        updateDropdown();
        closePopup();
    }
}

// Function to update the dropdown menu based on stored sheet IDs
function updateDropdown() {
    const dropdown = document.getElementById('sheetDropdown');
    dropdown.innerHTML = '<option value="" disabled selected>Select a Sheet</option>'; // Reset dropdown
    const storedSheets = JSON.parse(localStorage.getItem('sheetIds')) || [];

    storedSheets.forEach(sheetId => {
        // Assume the first tab is always the first sheet and use it as the option label
        fetchSheetTabName(sheetId, function(tabName) {
            const option = document.createElement('option');
            option.value = sheetId;
            option.textContent = tabName; // Tab name as label
            dropdown.appendChild(option);
        });
    });
}

// Function to fetch the first tab name from the Google Sheets API (mocked here)
function fetchSheetTabName(sheetId, callback) {
    // Construct the URL to call the Google Apps Script API
    const apiUrl = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?spreadsheetId=${sheetId}`;

    // Make an API call to get the sheet name
    fetch(apiUrl)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            if (data.sheetName) {
                // Call the callback with the actual sheet name
                callback(data.sheetName);
            } else {
                console.error('Sheet name not found in the response.');
            }
        })
        .catch(error => {
            console.error('Error fetching sheet name:', error);
        });
}


// Function to load the selected sheet data (use as needed)
function loadSheetData() {
    const dropdown = document.getElementById('sheetDropdown');
    const selectedSheetId = dropdown.value;
    if (selectedSheetId) {
        console.log('Selected Sheet ID:', selectedSheetId);
        // You can add functionality to load the sheet data here if needed
    }
}

function updateSheetInfo(sheetId) {
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?spreadsheetId=${sheetId}`;

    // Make the API call to get the sheet data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Populate the table with the data returned from the API
            document.getElementById('forValue').textContent = data.forValue;
            document.getElementById('conValue').textContent = data.conValue;
            document.getElementById('desValue').textContent = data.desValue;

            document.getElementById('habValue').textContent = data.habValue;
            document.getElementById('intValue').textContent = data.intValue;
            document.getElementById('carValue').textContent = data.carValue;
        })
        .catch(error => {
            console.error('Error fetching sheet data:', error);
        });
}

function updateStatus(sheetId) {
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?spreadsheetId=${sheetId}`;

    // Make the API call to get the sheet data (Status)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Populate the table with the data returned from the API
            document.getElementById('statusHp').textContent = `${data.currentHp}/${data.totalHp}`;
            document.getElementById('statusMana').textContent = `${data.currentMana}/${data.totalMana}`;
            document.getElementById('statusEnergia').textContent = `${data.currentEnergia}/${data.totalEnergia}`;
            document.getElementById('statusAlma').textContent = `${data.currentAlma}/${data.totalAlma}`;

        })
        .catch(error => {
            console.error('Error fetching sheet data:', error);
        });
}

function sendUpdateRequest(cell, value) {
    const savedValue = localStorage.getItem('selectedDropdownValue');
    
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?spreadsheetId=${savedValue}&cell=${cell}&value=${value}`;

    // Make the API call to get the sheet data (Status)
    fetch(url);
    updateSheetInfo(savedValue);
    updateStatus(savedValue);
}

// Initialize the dropdown with stored sheets on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDropdown();
});

document.getElementById('sheetDropdown').addEventListener('change', function() {
    const selectedSheetId = this.value;
    localStorage.setItem('selectedSheetId', selectedSheetId);
    updateSheetInfo(selectedSheetId);
    updateStatus(selectedSheetId);
});

document.querySelectorAll('.adjust-button').forEach(button => {
    button.addEventListener('click', function() {
        const cell = this.getAttribute('data-cell'); // Get the target cell
        const isIncrement = this.textContent === '+'; // Check if it's "+" or "-"
        const inputValue = parseInt(document.getElementById('inputValue').value) || 1; // Get input value, default to 1
        
        const value = isIncrement ? -inputValue : inputValue; // "+" decreases, "-" increases

        sendUpdateRequest(cell, value); // Function to send the request

        document.getElementById('inputValue').value = 1; // Reset input field to 1 after sending
    });
});

