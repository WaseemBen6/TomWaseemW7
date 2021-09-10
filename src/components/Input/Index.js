import React from "react";

const InputLocation = ({ onChange }) => (
  <select onChange={onChange} name="Cities" id="City">
    <option value="Birmingham">Birmingham</option>
    <option value="London">London</option>
    <option value="Sydney">Sydney</option>
  </select>
);

export default InputLocation;
