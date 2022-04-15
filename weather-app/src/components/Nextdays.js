import React from "react";

export default function Nextdays({ weather }) {
  return (
    <div className="nextdays-container">
      <ul className="list-day">
        <li className="day">32°</li>
        <li className="day">23°</li>
        <li className="day">17°</li>
        <li className="day">27°</li>
        <li className="day">8°</li>
      </ul>
    </div>
  );
}
