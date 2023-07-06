import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let { button, danger, success } = styles;
  let btnClass = props.btnType === "danger" ? danger : success;
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={`${button} ${btnClass}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
