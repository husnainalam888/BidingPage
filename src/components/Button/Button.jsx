import React from "react";
import "./Button.css";
function Button({ title, startIcon, style, onClick, textStyle }) {
  return (
    <button onClick={onClick} style={style} className="button">
      {startIcon && <img src={startIcon} alt="icon" />}
      <span className="button-text" style={textStyle}>
        {title}
      </span>
    </button>
  );
}

export default Button;
