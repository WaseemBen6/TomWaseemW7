import React from "react";
import sunset from "../../sunset2.png";
import sunrise from "../../sunrise2.png";

const Cities = ({ data }) => {
  return (
    <div id="citiesText">
      <div id="solarnoon" class="suntime">
        <h2>Solar noon</h2>
        <p id="solarnoontime">{data.solar_noon}</p>
        <img src="" alt="" />
      </div>
      <section id="citiesBox">
        <div id="sunrise" class="suntime">
          <h2>Sunrise</h2>
          <p id="sunriseTime">{data.sunrise}</p>
          <img src={sunrise} alt="sunrise" />
        </div>
        <div id="dayLength">
          <p>Length of the day: {data.day_length}</p>
        </div>
        <div id="sunset" class="suntime">
          <h2>Sunset</h2>
          <p id="sunsetTime">{data.sunset}</p>
          <img src={sunset} alt="sunset" />
        </div>
      </section>
    </div>
  );
};

export default Cities;
