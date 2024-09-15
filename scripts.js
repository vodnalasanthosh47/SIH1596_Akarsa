// Data for different states
const stateData = {
    Punjab: {
        soilType: "Sandy soil, Clay Soil, Peat Soil, Silt Soil, Loam soil",
        climate: "Inland subtropical location, semiarid to subhumid, hot summers.",
        crops: ["Wheat", "Rice", "Cotton", "Sugarcane", "Maize", "Pulses"],
        produce: [
            { name: "Wheat", quantity: "1,62,00,000 tonnes" },
            { name: "Rice", quantity: "1,85,86,000 tonnes" },
            { name: "Cotton", quantity: "59,500 tonnes" },
            { name: "Sugarcane", quantity: "84,000 kilograms" },
            { name: "Maize", quantity: "5,00,000 tonnes" }
        ]
    },
    // Add more states here
};

// Function to update the state data
function updateStateData(state) {
    const stateInfo = stateData[state];
    document.getElementById('stateName').innerText = state;
    document.getElementById('soilType').innerText = stateInfo.soilType;
    document.getElementById('climate').innerText = stateInfo.climate;

    // Update the crops list
    const cropsList = document.getElementById('cropsList');
    cropsList.innerHTML = "";
    stateInfo.crops.forEach(crop => {
        const li = document.createElement('li');
        li.innerText = crop;
        cropsList.appendChild(li);
    });

    // Update the produce table
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = "";
    stateInfo.produce.forEach(item => {
        const tr = document.createElement('tr');
        const tdProduce = document.createElement('td');
        const tdQuantity = document.createElement('td');
        tdProduce.innerText = item.name;
        tdQuantity.innerText = item.quantity;
        tr.appendChild(tdProduce);
        tr.appendChild(tdQuantity);
        tableBody.appendChild(tr);
    });
}

// Dropdown change event
document.getElementById('stateDropdown').addEventListener('change', function () {
    const selectedState = this.value;
    updateStateData(selectedState);
});

// Initial load
window.onload = () => {
    updateStateData('Punjab'); // Default state
};
