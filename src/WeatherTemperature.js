import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [Unit, setUnit] = useState("celcius");

  function ShowCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (Unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span style={{ fontSize: 50 }}> {Math.round(props.celcius)}</span>{" "}
        <span style={{ fontSize: 25 }}>
          C° |
          <a href="/" onClick={ShowFahrenheit}>
            {" "}
            F°
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32.0;
    return (
      <span className="WeatherTemperature">
        <span style={{ fontSize: 50 }}> {Math.round(fahrenheit)}</span>{" "}
        <span style={{ fontSize: 25 }}>
          <a href="/" onClick={ShowCelcius}>
            C°
          </a>{" "}
          | F°
        </span>
      </span>
    );
  }
}
