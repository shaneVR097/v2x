const citiesWeather = {
    Kolkata: { temperature: '25°C', precipitation: '2 mm', windSpeed: '10 km/h', windDirection: 'NE', visibility: '200 m', severeWeatherAlerts: 'None', AQI: '50', forecast: 'Sunny' },
    Mumbai: { temperature: '30°C', precipitation: '1 mm', windSpeed: '15 km/h', windDirection: 'NW', visibility: '300 m', severeWeatherAlerts: 'None', AQI: '55', forecast: 'Partly Cloudy' },
    Delhi: { temperature: '35°C', precipitation: '0 mm', windSpeed: '12 km/h', windDirection: 'E', visibility: '250 m', severeWeatherAlerts: 'None', AQI: '60', forecast: 'Sunny' },
    Chennai: { temperature: '32°C', precipitation: '3 mm', windSpeed: '18 km/h', windDirection: 'SW', visibility: '150 m', severeWeatherAlerts: 'None', AQI: '65', forecast: 'Rainy' },
    Hyderabad: { temperature: '28°C', precipitation: '2 mm', windSpeed: '13 km/h', windDirection: 'SE', visibility: '180 m', severeWeatherAlerts: 'None', AQI: '58', forecast: 'Cloudy' },
    Jaipur: { temperature: '38°C', precipitation: '0 mm', windSpeed: '10 km/h', windDirection: 'N', visibility: '300 m', severeWeatherAlerts: 'None', AQI: '63', forecast: 'Sunny' },
    Chandigarh: { temperature: '30°C', precipitation: '1 mm', windSpeed: '20 km/h', windDirection: 'W', visibility: '100 m', severeWeatherAlerts: 'Fog', AQI: '70', forecast: 'Foggy' },
    Guwahati: { temperature: '27°C', precipitation: '4 mm', windSpeed: '8 km/h', windDirection: 'NE', visibility: '250 m', severeWeatherAlerts: 'None', AQI: '55', forecast: 'Rainy' },
    Bangalore: { temperature: '26°C', precipitation: '5 mm', windSpeed: '16 km/h', windDirection: 'SE', visibility: '120 m', severeWeatherAlerts: 'Fog', AQI: '72', forecast: 'Rainy' },
    Raipur: { temperature: '31°C', precipitation: '2 mm', windSpeed: '14 km/h', windDirection: 'SW', visibility: '200 m', severeWeatherAlerts: 'None', AQI: '57', forecast: 'Cloudy' },
    Jamshedpur: { temperature: '29°C', precipitation: '3 mm', windSpeed: '11 km/h', windDirection: 'NW', visibility: '180 m', severeWeatherAlerts: 'None', AQI: '60', forecast: 'Rainy' },
    Bhopal: { temperature: '34°C', precipitation: '1 mm', windSpeed: '9 km/h', windDirection: 'E', visibility: '300 m', severeWeatherAlerts: 'None', AQI: '62', forecast: 'Sunny' },
    Kanpur: { temperature: '33°C', precipitation: '0 mm', windSpeed: '17 km/h', windDirection: 'NE', visibility: '250 m', severeWeatherAlerts: 'None', AQI: '58', forecast: 'Sunny' },
    Pune: { temperature: '29°C', precipitation: '2 mm', windSpeed: '12 km/h', windDirection: 'SE', visibility: '200 m', severeWeatherAlerts: 'None', AQI: '55', forecast: 'Cloudy' },
    Nagpur: { temperature: '35°C', precipitation: '0 mm', windSpeed: '14 km/h', windDirection: 'SW', visibility: '300 m', severeWeatherAlerts: 'None', AQI: '60', forecast: 'Sunny' },
    Patna: { temperature: '30°C', precipitation: '1 mm', windSpeed: '11 km/h', windDirection: 'NW', visibility: '250 m', severeWeatherAlerts: 'None', AQI: '56', forecast: 'Partly Cloudy' },
    Ahmedabad: { temperature: '36°C', precipitation: '0 mm', windSpeed: '15 km/h', windDirection: 'E', visibility: '200 m', severeWeatherAlerts: 'None', AQI: '65', forecast: 'Sunny' },
    Lucknow: { temperature: '32°C', precipitation: '1 mm', windSpeed: '16 km/h', windDirection: 'NE', visibility: '150 m', severeWeatherAlerts: 'Fog', AQI: '75', forecast: 'Rainy' },
    Noida: { temperature: '30°C', precipitation: '2 mm', windSpeed: '10 km/h', windDirection: 'SE', visibility: '200 m', severeWeatherAlerts: 'None', AQI: '60', forecast: 'Cloudy' },
    Nasik: { temperature: '28°C', precipitation: '3 mm', windSpeed: '12 km/h', windDirection: 'W', visibility: '180 m', severeWeatherAlerts: 'None', AQI: '55', forecast: 'Rainy' },
    Surat: { temperature: '33°C', precipitation: '1 mm', windSpeed: '11 km/h', windDirection: 'SW', visibility: '250 m', severeWeatherAlerts: 'None', AQI: '58', forecast: 'Sunny' },
    Kochi: { temperature: '27°C', precipitation: '4 mm', windSpeed: '9 km/h', windDirection: 'E', visibility: '300 m', severeWeatherAlerts: 'None', AQI: '62', forecast: 'Rainy' },
    Coimbatore: { temperature: '25°C', precipitation: '5 mm', windSpeed: '10 km/h', windDirection: 'NE', visibility: '200 m', severeWeatherAlerts: 'None', AQI: '65', forecast: 'Partly Cloudy' },
    Durgapur: { temperature: '28°C', precipitation: '3 mm', windSpeed: '11 km/h', windDirection: 'NW', visibility: '180 m', severeWeatherAlerts: 'None', AQI: '60', forecast: 'Rainy' }
};

const cityWeatherContainer = document.querySelector('.city-info-container');
let currentCityWeather = null;

function showCityWeather(cityName) {
    const cityData = citiesWeather[cityName];
    cityWeatherContainer.innerHTML = `
        <div class="city-weather">
            <p>City Name: ${cityName}</p>
            <p>Temperature: ${cityData.temperature}</p>
            <p>Precipitation: ${cityData.precipitation}</p>
            <p>Wind Speed: ${cityData.windSpeed}</p>
            <p>Wind Direction: ${cityData.windDirection}</p>
            <p>Road Visibility: ${cityData.visibility}</p>
            <p>Severe Weather Alerts: ${cityData.severeWeatherAlerts}</p>
            <p>AQI: ${cityData.AQI}</p>
            <p>Forecast: ${cityData.forecast}</p>
        </div>
    `;
    cityWeatherContainer.style.display = 'block';
}

const cityRows = document.querySelectorAll('.city');
cityRows.forEach(city => {
    city.addEventListener('click', function() {
        const cityName = city.textContent;
        if (currentCityWeather !== cityName) {
            showCityWeather(cityName);
            currentCityWeather = cityName;
        }
    });
});

document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.city-container') && !event.target.closest('.city-weather')) {
        cityWeatherContainer.style.display = 'none';
    }
});

// Populate city dropdown list
const cityDropdown = document.getElementById('city');
for (const city in citiesWeather) {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityDropdown.appendChild(option);
}

// Dummy road names
const roadNames = ["Road 1", "Road 2", "Expressway 1", "Expressway 2", "Highway 1", "Highway 2"];

// Populate road names dropdown
const roadNameDropdown = document.getElementById('road-name');
roadNames.forEach(road => {
    const option = document.createElement('option');
    option.value = road;
    option.textContent = road;
    roadNameDropdown.appendChild(option);
});

// Dummy road condition data
const roadConditionData = {
    "Road 1": { temperature: '25°C', precipitation: '2 mm', precipitationType: 'Rain', fogIntensity: 3, mistIntensity: 5, visibility: '80%' },
    "Road 2": { temperature: '30°C', precipitation: '1 mm', precipitationType: 'Drizzle', fogIntensity: 2, mistIntensity: 4, visibility: '85%' },
    "Expressway 1": { temperature: '27°C', precipitation: '3 mm', precipitationType: 'Rain', fogIntensity: 4, mistIntensity: 6, visibility: '70%' },
    "Expressway 2": { temperature: '28°C', precipitation: '2 mm', precipitationType: 'Drizzle', fogIntensity: 3, mistIntensity: 5, visibility: '75%' },
    "Highway 1": { temperature: '32°C', precipitation: '1 mm', precipitationType: 'Rain', fogIntensity: 5, mistIntensity: 7, visibility: '60%' },
    "Highway 2": { temperature: '33°C', precipitation: '0.5 mm', precipitationType: 'Drizzle', fogIntensity: 4, mistIntensity: 6, visibility: '65%' }
};

function showRoadCondition() {
    const roadName = document.getElementById('road-name').value;

    // Retrieve road condition data based on road name
    const roadCondition = roadConditionData[roadName];

    // Display road condition information in the main screen
    const roadConditionInfo = document.querySelector('.road-condition-info');
    roadConditionInfo.innerHTML = `
        <div class="road-visibility">
            <p>Road Name: ${roadName}</p>
            <p>Temperature: ${roadCondition.temperature}</p>
            <p>Precipitation: ${roadCondition.precipitation}</p>
            <p>Precipitation Type: ${roadCondition.precipitationType}</p>
            <p>Fog Intensity: ${roadCondition.fogIntensity}/10</p>
            <p>Mist Intensity: ${roadCondition.mistIntensity}/10</p>
            <p>Road Visibility: ${roadCondition.visibility}</p>
        </div>
    `;
    roadConditionInfo.style.display = 'block';
}

// Event listener for "Show Road Condition" button
document.getElementById('show-condition').addEventListener('click', showRoadCondition);

// Event listener for "Show Road Condition" button
document.getElementById('show-condition').addEventListener('click', showRoadCondition);

// Close road condition info on clicking outside the search criteria
document.addEventListener('click', function(event) {
    const roadConditionInfo = document.querySelector('.road-condition-info');
    if (!event.target.closest('.search-criteria') && event.target !== roadConditionInfo) {
        roadConditionInfo.style.display = 'none';
    }
});
