import React from "react";
import Weather from "./Weather";

export default function Location({ weather }) {
  //format de date
  const dateFormater = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `;
  };
  return (
    <>
      {typeof weather.main != "undefined" ? (
        <>
          <div className="location-container">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{dateFormater(new Date())}</div>
          </div>
          <Weather />
        </>
      ) : (
        ""
      )}
    </>
  );
}
