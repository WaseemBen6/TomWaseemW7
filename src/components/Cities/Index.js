import React from "react";

const Cities = ({ data }) => {
 return (
 <section>
 <h2>Sunrise</h2>
    <p>{data.sunrise}</p>
 <h2>Sunset</h2>
    <p>{data.sunset}</p>
 </section>
)};


export default Cities;
