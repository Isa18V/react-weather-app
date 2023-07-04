import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { SpinnerCircularFixed } from "spinners-react";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function HandleResponse(response) {
    console.log(response);
    setWeatherdata({
      ready: true,
      temperature: response.data.temperature.current,
      date: response.data.time * 1000,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconImg: response.data.condition.icon_url,
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
    const apiKey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
      </div>
    );
  } else {
    Search();
    return <SpinnerCircularFixed color="purple" thickness="300" />;
  }
}
