import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <React.Fragment>
      <button>{text}</button>
    </React.Fragment>
  );
};

export default Button;
