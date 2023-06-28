import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="destination-description">
        <h1>rome</h1>
        <p>woensdag 14:00</p>
        <p>Overwegend bewolkt</p>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Overwegend bewolkt"
          ></img>{" "}
          21 C°
        </div>
        <div className="col-6">
          <p>Neerslagkans: 1%</p>
          <p> Luchtvochtigheid: 56%</p>
          <p>Wind: 11 km/h</p>
        </div>
      </div>
    </div>
  );
}
