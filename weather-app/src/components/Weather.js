import React from "react";
//import Nextdays from "./Nextdays";

export default function Weather({ weather }) {
  return (
    <>
      <div className="weather-container">
        <div className="temp">
          {Math.round(weather.list[0].main.temp)}
          <span className="celsius">°C</span>
        </div>
      </div>
      <div className="weather">{weather.list[0].weather[0].main}</div>
      {/*<Nextdays weather={weather} /> */}
    </>
  );
}
