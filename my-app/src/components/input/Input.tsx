import React, { InputHTMLAttributes } from "react";
import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input1: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <React.Fragment>
      <input type={type} placeholder={placeholder} className="margem"></input>
    </React.Fragment>
  );
};

export default Input1;
