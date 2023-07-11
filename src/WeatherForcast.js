import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Weatherforecast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForcast, index) {
            if (index < 5) {
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForcast} />
              </div>;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `bd79ao40tde3dec118ca46bc3e6dd55f`;
    let longitude = props.coord.longitude;
    let latitude = props.coord.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
