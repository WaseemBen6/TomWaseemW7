import React, { useState } from "react";
import InputLocation from "./components/Input/Index";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Birmingham");

  function changeLocationState(e) {
    setLocation(e.target.value);
    console.log(location);
  }

  return (
    <>
      <InputLocation onChange={changeLocationState} />
    </>
  );
}

export default App;
