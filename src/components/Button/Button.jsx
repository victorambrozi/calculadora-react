import React from "react";
import { ButtonComponent } from "./button-style";

const Button = ({ label, classValue, onClick }) => {
  const handleClick = (event) => {
    onClick && onClick(label);
  };
  
  return (
    <ButtonComponent className={classValue} onClick={handleClick}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
