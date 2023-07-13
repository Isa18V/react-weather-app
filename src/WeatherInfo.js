import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="destination-description">
        <h1 className="text-capitalize">{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={new Date()} />
          </li>
          <li className="city-description">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherIcon data={props.data.icon} size={80} />
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
