import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { weatherAPI_APIKEY, weatherAPI_URL } from "./api";
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';

function App() {

  const [ currentWeather, setCurrentWeather ] = useState(null);
  const [ forecastWeather, setForecastWeather ] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [ lat, long ] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${weatherAPI_URL}weather?lat=${lat}&lon=${long}&appid=${weatherAPI_APIKEY}`);

    const forecastWeatherFetch = fetch(`${weatherAPI_URL}forecast?lat=${lat}&lon=${long}&appid=${weatherAPI_APIKEY}`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastWeatherResponse = await response[1].json();

        setCurrentWeather({label: searchData.label , ...currentWeatherResponse});
        setForecastWeather({label: searchData.label , ...forecastWeatherResponse});
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <p id="app-title">WEATHER APP</p>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
