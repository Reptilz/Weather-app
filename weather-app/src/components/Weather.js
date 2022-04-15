import React from "react";

export default function Weather({ weather }) {
  return (
    <div className="weather-container">
      <div className="temp">{Math.round(weather.main.temp)}°c</div>
      <div className="weather">{weather.weather[0].main}</div>
    </div>
  );
}
