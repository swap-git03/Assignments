const resultElmt = document.querySelector('#result');
const cityNameElmt = document.querySelector('#cityName');
const searchBtn = document.querySelector('#searchBtn');

const API_KEY = "ca018df54353f065aaed7d802825b8be";

async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    resultElmt.innerHTML = `
      <div class="alert alert-danger text-center">
        ❌ ${error.message}
      </div>
    `;
  }
}

function displayWeather(data) {
  resultElmt.innerHTML = `
    <div class="weather-card p-4 text-center">
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
           alt="${data.weather[0].description}" 
           class="weather-icon" />
      <h3>${data.main.temp}°C</h3>
      <p>${data.weather[0].main} - ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    </div>
  `;
}

function handleSubmit() {
  const city = cityNameElmt.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    resultElmt.innerHTML = `<div class="alert alert-warning text-center">⚠ Please enter a city name</div>`;
  }
}

// Event Listeners
searchBtn.addEventListener("click", handleSubmit);
cityNameElmt.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSubmit();
});
