import React from "react";
import clearSkyImg from "./images/clearSky.png";
import fewCloudsImg from "./images/fewClouds.png";
import scatteredCloudsImg from "./images/scatteredClouds.png";
import brokenCloudsImg from "./images/brokenClouds.png";
import showerRainImg from "./images/showerRain.png";
import rainImg from "./images/rain.png";
import thunderstormImg from "./images/thunderstorm.png";
import snowImg from "./images/snow.png";
import mistImg from "./images/mist.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyImg,
    "01n": "CLEAR_NIGHT",
    "02d": fewCloudsImg,
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": scatteredCloudsImg,
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": brokenCloudsImg,
    "04n": "CLOUDY",
    "09d": showerRainImg,
    "09n": "RAIN",
    "10d": rainImg,
    "10n": "RAIN",
    "11d": thunderstormImg,
    "11n": "RAIN",
    "13d": snowImg,
    "13n": "SNOW",
    "50d": mistImg,
    "50n": "FOG",
  };

  return (
    <img
      src={codeMapping[props.data]}
      alt="Weather Icon"
      style={{ width: "80px", height: "80px" }}
    />
  );
}
