import React from "react";
import "./Weatherforecast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function HandleResponse(response) {
    console.log(response.data);
  }
  const apikey = "ecb1e604034014f9c94ecdtbo8ae777f";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apikey}&units=metric`;

  axios.get(apiUrl).then(HandleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div>icon</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
