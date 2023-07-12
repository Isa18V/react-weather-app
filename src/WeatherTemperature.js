import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [Unit, setUnit] = useState("celcius");

  function ShowCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (Unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span style={{ fontSize: 45 }}> {Math.round(props.celcius)}</span>{" "}
        <span style={{ fontSize: 15 }}>{ShowCelcius}C°</span>
      </span>
    );
  }
}
