import React from "react";
import "./button.css";

const Button = ({ title, colorStyle }) => {
  return (
    <>
      <button type="submit" className={colorStyle}>
        {title}
      </button>
    </>
  );
};

export default Button;
