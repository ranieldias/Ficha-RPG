// Function to generate the status controls
function generateStatusControls() {
    const statusData = [
        { label: "HP", id: "statusHp", dataCell: "H13" },
        { label: "Mana", id: "statusMana", dataCell: "H15" },
        { label: "Energia", id: "statusEnergia", dataCell: "H16" },
        { label: "Alma", id: "statusAlma", dataCell: "H14" },
    ];
    
    const statusContainer = document.getElementById("statusContainer");
    
    statusData.forEach((status) => {
        const controlsContainer = document.createElement("div");
        controlsContainer.classList.add("controlsContainer");

        const labelDiv = document.createElement("div");
        labelDiv.classList.add("rowContainer");
        labelDiv.style.fontWeight = "bold";
        labelDiv.textContent = status.label;

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots-container");
        dotsContainer.id = `${status.dataCell.toLowerCase()}Dots`;

        for (let i = 0; i < 5; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);
        }
        labelDiv.appendChild(dotsContainer);

        const farRightDiv = document.createElement("div");
        farRightDiv.classList.add("rowContainer");

        const statusSpan = document.createElement("span");
        statusSpan.id = status.id;
        statusSpan.style.fontWeight = "bold";
        statusSpan.textContent = "0/0";

        const plusButton = document.createElement("button");
        plusButton.classList.add("styled-button", "adjust-button");
        plusButton.dataset.cell = status.dataCell;
        plusButton.textContent = "+";

        const minusButton = document.createElement("button");
        minusButton.classList.add("styled-button", "adjust-button");
        minusButton.dataset.cell = status.dataCell;
        minusButton.textContent = "-";

        farRightDiv.appendChild(statusSpan);
        farRightDiv.appendChild(plusButton);
        farRightDiv.appendChild(minusButton);

        controlsContainer.appendChild(labelDiv);
        controlsContainer.appendChild(farRightDiv);

        statusContainer.appendChild(controlsContainer);
    });
}

// Function to generate the status controls
function generateExpertisesControls() {
    const expertisesData = [
        { label: "Corpo", id: "ExpertiseCorpo", dataCell: "2" },
        { label: "Golpe", id: "ExpertiseGolpe", dataCell: "3" },
        { label: "Agarrar", id: "ExpertiseAgarrar", dataCell: "4" },
        { label: "Intimidar", id: "ExpertiseIntimidar", dataCell: "5" },
        { label: "Bloquear", id: "ExpertiseBloquear", dataCell: "6" },
        { label: "Fadiga", id: "ExpertiseFadiga", dataCell: "7" },
        { label: "Imunológico", id: "ExpertiseImunológico", dataCell: "8" },
        { label: "Resistir", id: "ExpertiseResistir", dataCell: "9" },
        { label: "Agilidade", id: "ExpertiseAgilidade", dataCell: "10" },
        { label: "Correr", id: "ExpertiseCorrer", dataCell: "11" },
        { label: "Esquivar", id: "ExpertiseEsquivar", dataCell: "12" },
        { label: "Esconder", id: "ExpertiseEsconder", dataCell: "13" },
        { label: "Percepção", id: "ExpertisePercepção", dataCell: "14" },
        { label: "Técnica", id: "ExpertiseTécnica", dataCell: "15" },
        { label: "Mirar", id: "ExpertiseMirar", dataCell: "16" },
        { label: "Manusear", id: "ExpertiseManusear", dataCell: "17" },
        { label: "Pesquisar", id: "ExpertisePesquisar", dataCell: "18" },
        { label: "Vontade", id: "ExpertiseVontade", dataCell: "19" },
        { label: "Concentrar", id: "ExpertiseConcentrar", dataCell: "20" },
        { label: "Mente", id: "ExpertiseMente", dataCell: "21" },
        { label: "Lábia", id: "ExpertiseLábia", dataCell: "22" },
        { label: "Performance", id: "ExpertisePerformance", dataCell: "23" },
        { label: "Seduzir", id: "ExpertiseSeduzir", dataCell: "24" },
        { label: "Persuadir", id: "ExpertisePersuadir", dataCell: "25" }
    ];
    
    const expertisesContainer = document.getElementById("expertisesContainer");
    
    expertisesData.forEach((expertise) => {
        const controlsContainer = document.createElement("div");
        controlsContainer.classList.add("controlsContainer");

        const labelDiv = document.createElement("div");
        labelDiv.classList.add("rowContainer");
        labelDiv.style.fontWeight = "bold";
        labelDiv.textContent = expertise.label;

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots-container");
        dotsContainer.id = `${expertise.dataCell.toLowerCase()}Dots`;

        for (let i = 0; i < 5; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);
        }
        labelDiv.appendChild(dotsContainer);

        const farRightDiv = document.createElement("div");
        farRightDiv.classList.add("rowContainer");

        const expertiseSpan = document.createElement("span");
        expertiseSpan.id = expertise.id;
        expertiseSpan.style.fontWeight = "bold";
        expertiseSpan.textContent = "0+0+0+0";

        const diceButton = document.createElement("button");
        diceButton.classList.add("styled-button", "expertise-button");
        diceButton.dataset.cell = expertise.dataCell;

        // Create an image element for the dice icon
        const diceIcon = document.createElement("img");
        diceIcon.src = "assets/dice-white.svg";
        diceIcon.alt = "Dice Icon";
        diceIcon.style.width = "20px";
        diceIcon.style.height = "20px";

        // Add the image to the button
        diceButton.appendChild(diceIcon);

        farRightDiv.appendChild(expertiseSpan);
        farRightDiv.appendChild(diceButton);

        controlsContainer.appendChild(labelDiv);
        controlsContainer.appendChild(farRightDiv);

        expertisesContainer.appendChild(controlsContainer);
    });
}

// Function to generate the attributes table
function generateAttributesTable() {
    const tableData = [
    { headers: ["FOR", "CON", "DES"], ids: ["strengthValue", "constitutionValue", "dexterityValue"] },
    { headers: ["HAB", "INT", "CAR"], ids: ["abilityValue", "intelligenceValue", "charismaValue"] },
    ];

    const tableContainer = document.querySelector(".tableContainer");
    const table = document.createElement("table");
    table.classList.add("infoTable");

    tableData.forEach((section) => {
        const headerRow = document.createElement("tr");
        section.headers.forEach((headerText) => {
            const headerCell = document.createElement("td");
            headerCell.style.fontWeight = "bold";
            headerCell.style.color = "white";
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });
        table.appendChild(headerRow);

        const valueRow = document.createElement("tr");
        section.ids.forEach((id) => {
            const valueCell = document.createElement("td");
            valueCell.id = id;

            const dotsContainer = document.createElement("div");
            dotsContainer.classList.add("dots-container");
            dotsContainer.id = `${id.toLowerCase()}Dots`;

            for (let i = 0; i < 5; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);
            }

            valueCell.appendChild(dotsContainer);

            valueRow.appendChild(valueCell);
        });
        table.appendChild(valueRow);
    });

    tableContainer.appendChild(table);
}

generateStatusControls();
generateExpertisesControls();
generateAttributesTable();

// Function to show and hide the loading animation
function showLoadingAnimation(element) {
    document.getElementById(element).style.display = 'flex';
}
function hideLoadingAnimation() {
    const dotsContainers = document.querySelectorAll('.dots-container');
    dotsContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// Functions to open and close the popup
function openAddId() {
    document.getElementById('addId').showModal();
}
function closeAddId() {
    document.getElementById('addId').close();
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

// Function to reload the data off all the page
function reloadData() {
    const selectedSheetId = localStorage.getItem('selectedSheetId');
    if (selectedSheetId) {
        getStatus(selectedSheetId);
        getAttributes(selectedSheetId); 
    }
}

// Function to fetch the first tab's name from the Google Sheets API
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

// Function to fetch the atributes data from the Google Sheets API
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

// Function to fetch the status data from the Google Sheets API
function getStatus(sheetId) {
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?action=getSatus&spreadsheetId=${sheetId}`;

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
    })
    .finally(() => {
        hideLoadingAnimation();
    });
}

// Function to update the status data in the Google Sheets API
function updateStatus(cell, value) {
    const selectedSheetId = localStorage.getItem('selectedSheetId');
    const url = `https://script.google.com/macros/s/AKfycbx727Wws4Axs7qRAiJ9wHV8GmgiMo8SV_qhqjRvvsJUxtcpWEnjR7EHE3e5TB-oxtQLiA/exec?action=updateStatus&spreadsheetId=${selectedSheetId}&cell=${cell}&value=${value}`;

    fetch(url).finally(() => {
        getStatus(selectedSheetId);
    });
}

// Function to update the dropdown menu based on stored sheet IDs
function updateDropdown() {
    const dropdown = document.getElementById('sheetDropdown');
    const storedSheets = JSON.parse(localStorage.getItem('sheetIds')) || [];
    const selectedSheetId = localStorage.getItem('selectedSheetId');

    storedSheets.forEach(sheetId => {
        getTabName(sheetId, function(tabName) {
            const option = document.createElement('option');
            option.value = sheetId;
            option.textContent = tabName;
            dropdown.appendChild(option);

            if (selectedSheetId && sheetId === selectedSheetId) {
                option.selected = true;
            }
        });
    });
}

// Event Listener to update data when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateDropdown();
    reloadData();
});

// Event listener to update the sheet data when a new sheet is selected
document.getElementById('sheetDropdown').addEventListener('change', function() {
    const selectedSheetId = this.value;
    localStorage.setItem('selectedSheetId', selectedSheetId);
    getStatus(selectedSheetId);
    getAttributes(selectedSheetId); 
});

// Event listener to clicks on styled buttons
const styledButtons = document.querySelectorAll('.styled-button');
styledButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 200);
    });
});

// Event listener to clicks on adjust buttons
document.querySelectorAll('.adjust-button').forEach(button => {
    button.addEventListener('click', function() {
        const cell = this.getAttribute('data-cell');
        const lowerCell = cell.toLowerCase();
        const isIncrement = this.textContent === '+';
        const inputValue = parseInt(document.getElementById('inputValue').value) || 1;
        const value = isIncrement ? -inputValue : inputValue;
        showLoadingAnimation(`${lowerCell}Dots`);
        updateStatus(cell, value);
        document.getElementById('inputValue').value = 1;
    });
});



