import React, { useEffect, useState } from "react";
import InputLocation from "./components/Input/Index";
import ButtonLocation from "./components/ButtonLocation";
import "./App.css";
import Cities from "./components/Cities/Index";

let apiKey = "a0eac15a53f146068bfb3d203085ee96";

function App() {
  const [location, setLocation] = useState("Birmingham");
  const [astronomyData, setAstronomyData] = useState({});

  function changeLocationState(e) {
    setLocation(e.target.value);
    console.log(location);
  }

  function updateLocationStateWithUserLocation(position) {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude: latitude, longitude: longitude });
    console.log(position);
  }

  //GET request params determined by the data type of state
  useEffect(() => {
    async function getData() {
      let res;
      if (typeof location === "string") {
        res = await fetch(
          `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&location=${location}`
        );
      } else if (typeof location === "object") {
        res = await fetch(
          `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&lat=${location.latitude}&long=${location.longitude}
          `
        );
      }
      const data = await res.json();
      setAstronomyData(data);
    }
    getData();
  }, [location]);

  function getUsersLocation() {
    navigator.geolocation.getCurrentPosition(
      updateLocationStateWithUserLocation
    );
  }

  return (
    <main id="container">
      <Cities data={astronomyData} />
      <ButtonLocation id="cities" onClick={getUsersLocation} />
      <InputLocation id="location" onChange={changeLocationState} />
    </main>
  );
}

export default App;
