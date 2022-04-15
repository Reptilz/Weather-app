import React from "react";

export default function Weather({ weather }) {
  return (
    <div className="weather-container">
      <div className="temp">{Math.round(weather.main.temp)}°c</div>
      <div className="weather">Sunny</div>
    </div>
  );
}
