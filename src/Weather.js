import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherdata, setWeatherdata] = useState({});
  const [ready, setReady] = useState(false);

  function HandleResponse(response) {
    setWeatherdata({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container-form">
          <form>
            <label>
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="destination-description">
          <h1>Rome</h1>
          <ul>
            <li>woensdag 14:00</li>
            <li>Overwegend bewolkt</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Overwegend bewolkt"
            ></img>
            {Math.round(temperature)} C°
          </div>
          <div className="col-6">
            <ul>
              <li>Neerslagkans: 1%</li>
              <li>Luchtvochtigheid: 56%</li>
              <li>Wind: 11 km/</li>
            </ul>
          </div>
        </div>

        {/* here is the row with all the days */}
        <div className="row">
          <div className="col-3">
            <ul>
              <li>monday</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Overwegend bewolkt"
                ></img>
              </li>
              <li>
                <div className="row">
                  <div className="col-6">12°</div>
                  <div className="col-6">20°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>teusday</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Overwegend bewolkt"
                ></img>
              </li>
              <li>
                <div className="row">
                  <div className="col-6">12°</div>
                  <div className="col-6">20°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>wensday</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Overwegend bewolkt"
                ></img>
              </li>
              <li>
                <div className="row">
                  <div className="col-6">12°</div>
                  <div className="col-6">20°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>thusrday</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Overwegend bewolkt"
                ></img>
              </li>
              <li>
                <div className="row">
                  <div className="col-6">12°</div>
                  <div className="col-6">20°</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let query = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
    return "Loading ...";
  }
}
