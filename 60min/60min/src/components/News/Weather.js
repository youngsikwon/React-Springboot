import React from 'react';
import './Weather.scss';

const weatherOptions = {
  Thunderstorm: 'wi-thunderstorm',
  Drizzle: 'wi-showers',
  Rain: 'wi-rain',
  Snow: 'wi-snow',
  Mist: 'wi-showers',
  Smoke: 'wi-smoke',
  Haze: 'wi-day-haze',
  Dust: 'wi-dust',
  Fog: 'wi-fog',
  Sand: 'wi-sandstorm',
  Dust: 'wi-dust',
  Ash: 'wi-dust',
  Squall: 'wi-cloudy-windy',
  Tornado: 'wi-tornado',
  Clear: 'wi-day-sunny',
  Clouds: 'wi-cloudy',
};

const printTemp = (item) => {
  return (
    <div className="weather-temp">
      <span>{Math.round(item.temp)}℃</span>
      <p>
        <span className="temp_min">{item.temp_min}º</span>/
        <span className="temp_max">{item.temp_max}º</span>
      </p>
      <span>Feel {Math.round(item.feels_like)}.0º</span>
    </div>
  );
};

const printWeather = (weatherNm) => {
  return (
    <div className="weather-current">
      <i className={`wi ${weatherOptions[weatherNm]}`}></i>
      <span className="weather-name">{weatherNm}</span>
    </div>
  );
};

const printWeatherInform = (weatherData) => {
  return (
    <div className="weather-flex">
      {printTemp(weatherData.main)}
      {printWeather(weatherData.weather[0].main)}
      <div className="weather-humid">
        <i className="wi wi-humidity"></i>
        <span>{weatherData.main.humidity}</span>
      </div>
    </div>
  );
};

const Weather = ({ weatherData }) => {
  // console.log(weatherData);
  return (
    <article className="weather-article">
      <div>
        <p className="weather-title">Weather</p>
        <p className="weather-location">Location: {weatherData.name}</p>
      </div>
      {printWeatherInform(weatherData)}
    </article>
  );
};

export default Weather;
