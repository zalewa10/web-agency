import React from "react";

const Button = ({ color, title, href, className }) => {
  return (
    <a href={href}>
      <button
        className={`
  px-5 py-2 border rounded-3xl text-white transition-all shadow-sm hover:shadow-lg ${
    color === "zielony"
      ? "border-color-zielony hover:bg-color-zielony shadow-color-zielony"
      : color === "fiolet"
      ? "border-color-fiolet hover:bg-color-fiolet shadow-color-fiolet"
      : "border-none"
  }  ${className}
  `}
      >
        {title}
      </button>
    </a>
  );
};

export default Button;
