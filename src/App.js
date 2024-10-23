import React, { useState } from "react";
import { getWeatherForecast } from "./services/WheatherServices";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async () => {
    const data = await getWeatherForecast(city);
    setForecast(data);
  };

  return (
    <div className="container">
      <h1>Weather in your city</h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Search</button>
      <div className="weather-list">
        {forecast.map((item, index) => (
          <div key={index} className="weather-item">
            <p> Date :{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>Temp: {item.main.temp} °C</p>
            <p>Min :{item.main.temp_min}</p>
            <p>Max: {item.main.temp_max}</p>
            <p>Pressure :{item.main.pressure}</p>
            <p>Humidity: {item.main.humidity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
