import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";

import "./weather.css";
import axios from "axios";

import { SpinnerCircularFixed } from "spinners-react";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function HandleResponse(response) {
    setWeatherdata({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function HandelSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function Search() {
    const apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <div className="container-form">
          <form onSubmit={HandelSubmit}>
            <label>
              <input type="text" name="name" onChange={handleCityChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <WeatherInfo data={weatherdata} />
        <WeatherForcast coordinates={weatherdata.coordinates} />
      </div>
    );
  } else {
    Search();
    return <SpinnerCircularFixed color="purple" thickness="300" />;
  }
}
