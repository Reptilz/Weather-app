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

  //si on appuie sur Enter dans l'input, alors on fait un fetch
  // avec les informations nécessaires dans l'url
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.url}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <>
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Search.."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      <Location weather={weather} />
    </>
  );
}
