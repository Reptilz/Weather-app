import React from "react";

export default function Nextdays({ weather }) {
  return (
    <>
      <div className="nextdays-container">
        <div className="list-day">
          {weather.map((temp, i = 0) => {
            <div className="day-date">{temp.list[i].main.temp}</div>;
            return i + 8;
          })}
        </div>
      </div>
    </>
  );
}
