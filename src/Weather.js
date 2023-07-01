import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherdata, setWeatherdata] = useState({ ready: false });

  function HandleResponse(response) {
    console.log(response);
    setWeatherdata({
      ready: true,
      temperature: response.data.temperature.current,
      wind: 12,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconImg: response.data.condition.icon_url,
    });
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <div className="container-form">
          <form>
            <label>
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="destination-description">
          <h1>{weatherdata.city}</h1>
          <ul>
            <li>day hour:minutes</li>
            <li>{weatherdata.description}</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6">
            <img src={weatherdata.iconImg} alt="Overwegend bewolkt"></img>
            {Math.round(weatherdata.temperature)} C°
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherdata.humidity}%</li>
              <li>Wind: {Math.round(weatherdata.wind)} km</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let query = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
    return "Loading ...";
  }
}
