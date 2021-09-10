import React from "react";

const ButtonLocation = ({ onClick }) => (
  <button
    onClick={onClick}
    className="locationButton"
    data-testid="ButtonLocation"
  >
    Use my location to get astronomy information
  </button>
);

export default ButtonLocation;
