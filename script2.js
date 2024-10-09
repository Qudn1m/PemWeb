const apiKey = 'ba857300bdc774a44b98bf9a7ad3c97a';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = 'Gunung Bromo'; 
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const city = data.name;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherResult.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}
