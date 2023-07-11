import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Weatherforecast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function HandleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily[0]);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apikey}&units=metric`;

    axios.get(apiUrl).then(HandleResponse);
    return null;
  }
}
