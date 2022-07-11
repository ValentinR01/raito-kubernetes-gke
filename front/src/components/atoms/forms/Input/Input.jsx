import React from "react";
import InputStyle from "./InputStyle.style";

const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <InputStyle
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
