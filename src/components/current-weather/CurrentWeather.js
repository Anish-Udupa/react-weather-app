import "./CurrentWeather.css";

function CurrentWeather({data}) {
    return (
        <div id="current-weather-container">
            <div id="current-weather-data">
                <p id="city-name">{data.label}</p>
                <p id="weather-description">{data.weather[0].description}</p>
                <p id="temperature">{`${Math.round((data.main.temp - 273.15) * 100)/100}°C`}</p>
            </div>
            <img alt="weather-icon" id="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        </div>
    );
}

export default CurrentWeather;