import React from "react";
import "./css/input.css";

export const RadioInput = ({ onChange, name, value }) => {
  return (
    <input
      type="radio"
      value={value}
      onChange={onChange}
      name={name}
      style={{ width: "25px", height: "45px" }}
    />
  );
};
