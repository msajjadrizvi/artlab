import React from "react";
import "./css/button.css";

export const Button = ({ value, onClick, disable, type }) => {
  return (
    <button
      onClick={onClick}
      className="button"
      disabled={disable}
      style={{
        opacity: disable && 0.5,
        padding: type === "next" && "10px 40px",
      }}
    >
      {value}
    </button>
  );
};
