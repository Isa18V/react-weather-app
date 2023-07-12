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
import clearSkyDImg from "./images/clearSkyD.png";
import fewCloudsDImg from "./images/fewCloudsD.png";
import rainDImg from "./images/rainD.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyImg,
    "01n": clearSkyDImg,
    "02d": fewCloudsImg,
    "02n": fewCloudsDImg,
    "03d": scatteredCloudsImg,
    "03n": scatteredCloudsImg,
    "04d": brokenCloudsImg,
    "04n": brokenCloudsImg,
    "09d": showerRainImg,
    "09n": showerRainImg,
    "10d": rainImg,
    "10n": rainDImg,
    "11d": thunderstormImg,
    "11n": thunderstormImg,
    "13d": snowImg,
    "13n": snowImg,
    "50d": mistImg,
    "50n": mistImg,
  };

  return (
    <img
      src={codeMapping[props.data]}
      alt="Weather Icon"
      style={{ width: "80px", height: "80px" }}
    />
  );
}
