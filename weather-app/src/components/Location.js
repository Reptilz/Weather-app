import React from "react";
import Weather from "./Weather";

export default function Location() {
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
      <div className="location-box">
        <div className="location">Liège, BE</div>
        <div className="date">{dateFormater(new Date())}</div>
      </div>
      <Weather />
    </>
  );
}
