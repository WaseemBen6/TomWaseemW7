import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Birmingham");

  function changeLocationState(e) {
    setLocation(e.target.value);
  }

  return <></>;
}

export default App;
