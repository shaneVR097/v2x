const cities = {
    Kolkata: { roads: 10, drivable: 8, undrivable: 2, rsa: 5, v2x: '80%', mapped: 6 },
    Mumbai: { roads: 12, drivable: 10, undrivable: 2, rsa: 6, v2x: '85%', mapped: 7 },
    Delhi: { roads: 15, drivable: 12, undrivable: 3, rsa: 7, v2x: '90%', mapped: 8 },
    Chennai: { roads: 9, drivable: 7, undrivable: 2, rsa: 4, v2x: '75%', mapped: 5 },
    Hyderabad: { roads: 11, drivable: 9, undrivable: 2, rsa: 5, v2x: '82%', mapped: 6 },
    Jaipur: { roads: 8, drivable: 6, undrivable: 2, rsa: 3, v2x: '70%', mapped: 4 },
    Chandigarh: { roads: 7, drivable: 5, undrivable: 2, rsa: 3, v2x: '68%', mapped: 3 },
    Guwahati: { roads: 6, drivable: 4, undrivable: 2, rsa: 2, v2x: '60%', mapped: 2 },
    Bangalore: { roads: 14, drivable: 11, undrivable: 3, rsa: 7, v2x: '88%', mapped: 9 },
    Raipur: { roads: 7, drivable: 5, undrivable: 2, rsa: 3, v2x: '68%', mapped: 3 },
    Jamshedpur: { roads: 6, drivable: 4, undrivable: 2, rsa: 2, v2x: '60%', mapped: 2 },
    Bhopal: { roads: 8, drivable: 6, undrivable: 2, rsa: 3, v2x: '70%', mapped: 4 },
    Kanpur: { roads: 9, drivable: 7, undrivable: 2, rsa: 4, v2x: '75%', mapped: 5 },
    Pune: { roads: 11, drivable: 9, undrivable: 2, rsa: 5, v2x: '82%', mapped: 6 },
    Nagpur: { roads: 8, drivable: 6, undrivable: 2, rsa: 3, v2x: '70%', mapped: 4 },
    Patna: { roads: 9, drivable: 7, undrivable: 2, rsa: 4, v2x: '75%', mapped: 5 },
    Ahmedabad: { roads: 10, drivable: 8, undrivable: 2, rsa: 5, v2x: '80%', mapped: 6 },
    Lucknow: { roads: 10, drivable: 8, undrivable: 2, rsa: 5, v2x: '80%', mapped: 6 },
    Noida: { roads: 8, drivable: 6, undrivable: 2, rsa: 3, v2x: '70%', mapped: 4 },
    Nasik: { roads: 7, drivable: 5, undrivable: 2, rsa: 3, v2x: '68%', mapped: 3 },
    Surat: { roads: 9, drivable: 7, undrivable: 2, rsa: 4, v2x: '75%', mapped: 5 },
    Kochi: { roads: 8, drivable: 6, undrivable: 2, rsa: 3, v2x: '70%', mapped: 4 },
    Coimbatore: { roads: 7, drivable: 5, undrivable: 2, rsa: 3, v2x: '68%', mapped: 3 },
    Durgapur: { roads: 6, drivable: 4, undrivable: 2, rsa: 2, v2x: '60%', mapped: 2 }
};

const cityInfoContainer = document.querySelector('.city-info');
const updateTable = document.querySelector('.update-table');
let currentCity = null;

function showCityInfo(cityName) {
    const cityData = cities[cityName];
    const cityInfoContainer = document.querySelector('.city-info-container');
    cityInfoContainer.innerHTML = `
        <div class="city-info">
            <p>City Name: ${cityName}</p>
            <p>Number of Roads: ${cityData.roads}</p>
            <p>Drivable Roads: ${cityData.drivable}</p>
            <p>Undrivable Roads: ${cityData.undrivable}</p>
            <p>RSA Units: ${cityData.rsa}</p>
            <p>% of V2X Connected Infrastructure: ${cityData.v2x}</p>
            <p># of Roads Mapped under V2X Network: ${cityData.mapped}</p>
        </div>
    `;
    cityInfoContainer.style.display = 'block';
}

function showRoadStats(roadName, condition) {
    // Simulated data for road statistics
    const snippet = `Google Maps Snippet for ${roadName}`;
    const rsaUnits = Math.floor(Math.random() * 100);
    const v2xInfra = Math.floor(Math.random() * 100);
    const mappedRoads = Math.floor(Math.random() * 100);
    const drivingCondition = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10

    // Display road statistics
    updateTable.innerHTML = `
        <tr>
            <td>${roadName}</td>
            <td>${snippet}</td>
            <td>${rsaUnits}%</td>
            <td>${v2xInfra}</td>
            <td>${mappedRoads}%</td>
            <td>${drivingCondition}</td>
        </tr>
    `;
}

const cityRows = document.querySelectorAll('.city');
cityRows.forEach(city => {
    city.addEventListener('click', function() {
        const cityName = city.textContent;
        if (currentCity !== cityName) {
            showCityInfo(cityName);
            currentCity = cityName;
        }
    });
});

// Event listener for city hover
// document.querySelectorAll('.city').forEach(city => {
//     city.addEventListener('mouseover', function() {
//         const cityName = city.textContent;
//         const dropdown = document.createElement('select');
//         dropdown.innerHTML = `
//             <option value="" selected disabled>Select Road Type</option>
//             <option value="Major Highways">Major Highways</option>
//             <option value="Expressways">Expressways</option>
//             <option value="Roads">Roads</option>
//         `;
//         dropdown.addEventListener('change', function() {
//             const selectedRoadType = dropdown.value;
//             if (selectedRoadType !== "") {
//                 displayRoadInfo(cityName, selectedRoadType);
//             }
//         });
//         city.appendChild(dropdown);
//     });

//     city.addEventListener('mouseout', function() {
//         const dropdown = city.querySelector('select');
//         if (dropdown) {
//             dropdown.remove();
//         }
//     });
// });

document.body.addEventListener('click', function(event) {
    const cityInfoContainer = document.querySelector('.city-info');
    if (!event.target.closest('.city-container') && !event.target.closest('.city-info')) {
        cityInfoContainer.innerHTML = '';
    }
});

// Populate city dropdown list
const cityDropdown = document.getElementById('city');
for (const city in cities) {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityDropdown.appendChild(option);
}

const roadNameDropdown = document.getElementById('road-name');
const roadNames = ["Road 1", "Road 2", "Expressway 1", "Expressway 2", "Highway 1", "Highway 2"]; // Add more road names as needed
roadNames.forEach(road => {
    const option = document.createElement('option');
    option.value = road;
    option.textContent = road;
    roadNameDropdown.appendChild(option);
});

function showRoadCondition() {
    const city = document.getElementById('city').value;
    const roadType = document.getElementById('road-type').value;
    const roadName = document.getElementById('road-name').value;

	
    


    // Simulated road condition data
    const roadConditionData = {
    "Road 1": { rsaUnits: 85, v2xInfra: 120, mappedRoads: 70, condition: 8 },
    "Road 2": { rsaUnits: 90, v2xInfra: 150, mappedRoads: 75, condition: 7 },
    "Expressway 1": { rsaUnits: 80, v2xInfra: 110, mappedRoads: 65, condition: 9 },
    "Expressway 2": { rsaUnits: 85, v2xInfra: 130, mappedRoads: 70, condition: 8 },
    "Highway 1": { rsaUnits: 75, v2xInfra: 100, mappedRoads: 60, condition: 9 },
    "Highway 2": { rsaUnits: 70, v2xInfra: 95, mappedRoads: 55, condition: 8 }
    // Add more road conditions as needed
};

    const roadCondition = roadConditionData[roadName];

    // Display road condition information
    const roadConditionInfo = document.querySelector('.road-condition-info');
    roadConditionInfo.innerHTML = `
        <h3>Road Condition for ${roadName}</h3>
        <p># of RSA Units: ${roadCondition.rsaUnits}</p>
        <p># of V2X Connected Infrastructure: ${roadCondition.v2xInfra}</p>
        <p>% of Road Mapped under V2X Network: ${roadCondition.mappedRoads}</p>
        <p>Driving Condition: ${roadCondition.condition}/10</p>
    `;
    roadConditionInfo.style.display = 'block';
}

// Close road condition info on clicking outside the search criteria
document.addEventListener('click', function(event) {
    const roadConditionInfo = document.querySelector('.road-condition-info');
    if (!event.target.closest('.search-criteria') && event.target !== roadConditionInfo) {
        roadConditionInfo.style.display = 'none';
    }
});
