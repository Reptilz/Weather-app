import axios from "axios";
import React, { useState } from "react";
import Location from "./Location";

//Informations de l'API
const api = {
  key: "83da8861d1cdc600301620ca8e6548f0",
  url: "https://api.openweathermap.org/data/2.5/",
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //fonction de recherche dans l'API
  const search = (evt) => {
    if (evt.key === "Enter") {
      //si on appuie sur Enter dans l'input, alors on fait la requête axios
      // avec les informations nécessaires dans l'url
      axios
        .get(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => setWeather(result));
    }
  };
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <Location />
    </>
  );
}
