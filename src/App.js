import React, { useState } from "react";
import Input from "./components/Input/Index";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Birmingham");

  function changeLocationState(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <Input onChange={changeLocationState} />
    </>
  );
}

export default App;
