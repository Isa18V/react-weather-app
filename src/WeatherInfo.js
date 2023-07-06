import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
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
          <li>{props.data.description}</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <img src={props.data.iconImg} alt="Overwegend bewolkt"></img>
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
