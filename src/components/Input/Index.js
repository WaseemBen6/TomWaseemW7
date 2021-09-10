import React from "react";

const InputLocation = ({ onChange }) => (
  <select onChange={onChange} name="Cities" id="City">
    <option value="Birmingham">Birmingham</option>
    <option value="Florida">Florida</option>
    <option value="London">London</option>
    <option value="Moscow">Moscow</option>
    <option value="Paris">Paris</option>
    <option value="Sydney">Sydney</option>
  </select>
);

export default InputLocation;
