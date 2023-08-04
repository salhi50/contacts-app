import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...other }) => {
  return (
    <>
      <button
        className="btn border bg-white text-primary"
        {...other}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
