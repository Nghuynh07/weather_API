const API_KEY = "17754870288d4c83b2a12026222504";

const weather = document.querySelector(".weather");
const region = document.querySelector(".weather-region");
const country = document.querySelector(".weather-country");
const localTime = document.querySelector(".weather-localTime");
const condition = document.querySelector(".weather-condition");
const img = document.querySelector(".weather-img").attributes[0];
const wind = document.querySelector(".weather-wind");
const form = document.querySelector(".weather-form");
const input = document.querySelector(".weather-input");
const error = document.querySelector(".weather-error");

async function weatherAPI(countryName) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${countryName}`
  );
  const data = await res.json();
  return data;
}

const displayWeather = () => {
  weatherAPI(input.value).then((res) => {
    console.log(res);

    region.textContent = res.location.region;
    country.textContent = res.location.country;
    localTime.textContent = res.location.localtime;
    weather.textContent = `${res.current.temp_f}°F`;
    condition.textContent = res.current.condition.text;
    img.textContent = res.current.condition.icon;
    wind.textContent = `${res.current.wind_mph}/mph`;
  });
};

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  displayWeather();
  input.value = "";
});
