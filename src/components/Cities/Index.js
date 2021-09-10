import React from "react";

const Cities = ({ data }) => {
  return (
    <section>
      <div id="sunrise" class="suntime">
        <h2>Sunrise</h2>
        <p id="sunriseTime">{data.sunrise}</p>
      </div>
      <div id="sunset" class="suntime">
        <h2>Sunset</h2>
        <p id="sunsetTime">{data.sunset}</p>
      </div>
      <div id ="dayLength">
        <p>Length of the day: {data.day_length}</p>
      </div>
    </section>
  );
};

export default Cities;
