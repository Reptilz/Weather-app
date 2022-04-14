import React from "react";
import Location from "./Location";

//Informations de l'API
const api = {
  key: "83da8861d1cdc600301620ca8e6548f0",
  url: "https://api.openweathermap.org/data/2.5/",
};

export default function Search() {
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <Location />
    </>
  );
}
