import React, { useEffect, useState } from "react";
import InputLocation from "./components/Input/Index";

import "./App.css";
import Cities from "./components/Cities/Index";

let apiKey = "a0eac15a53f146068bfb3d203085ee96"

function App() {
  const [location, setLocation] = useState("Birmingham");
  const [astronomyData, setAstronomyData] = useState({});


  function changeLocationState(e) {
    setLocation(e.target.value);
    console.log(location);
  }

  useEffect(()=>{
    async function getData() {
      const res = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&location=${location}`
      )
      const data = await res.json();
      setAstronomyData(data)
      console.log(astronomyData)
    }
    getData()
  },[location])


  return (
    <>
      <InputLocation onChange={changeLocationState} />
      <Cities data={astronomyData}/>
    </>
  );
}

export default App;
