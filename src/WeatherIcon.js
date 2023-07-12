import React from "react";
import clearSkyImg from "./images/clearSky.png";
import fewCloudsImg from "./images/fewClouds.png";
// Import other images for different weather conditions

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyImg,
    "01n": "CLEAR_NIGHT",
    "02d": fewCloudsImg,
    "02n": "PARTLY_CLOUDY_NIGHT",
    // Add more weather code mappings with imported images for different weather conditions
  };

  const imgSource = codeMapping[props.data] || clearSkyImg;

  return (
    <div>
      <img src={imgSource} style={{ width: "80px", height: "80px" }} alt="" />
    </div>
  );
}
