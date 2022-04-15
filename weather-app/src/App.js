import React from "react";
import Search from "./components/Search";
import "./style/_index.scss";

function App({ weather }) {
  return (
    <div className="app">
      <h1 className="title-page">Weather App</h1>
      <Search />
    </div>
  );
}

export default App;
