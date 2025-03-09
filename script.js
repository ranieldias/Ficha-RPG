// Function to open the popup to add a Sheet ID
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
    // Simulate an API call to fetch the first tab name (replace with actual API call)
    const mockTabName = `Tab-${sheetId.slice(0, 5)}`; // Just a mock tab name based on Sheet ID
    callback(mockTabName);
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

// Initialize the dropdown with stored sheets on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDropdown();
});

