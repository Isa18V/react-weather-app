import React from "react";
import "./WeatherForcast.ccs";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast">
      <div className="col">
        <div className="WeatherForcast-day">thu</div>
        <div>icon</div>
        <span className="WeatherForcast-maxTemp">20</span>
        <span className="WeatherForcast-mixTemp">10</span>
      </div>
    </div>
  );
}
