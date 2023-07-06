import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { Input, ValidInput, Label, InvalidInput, InputElement } = styles;

  let InputElem = null;

  let inputClass = `${InputElement} ${ValidInput}`;
  if (!props.isValid && props.isActive)
    inputClass = `${InputElement} ${InvalidInput}`;

  switch (props.elementType) {
    case "input":
      InputElem = (
        <input
          className={inputClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      InputElem = (
        <textarea
          className={InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      InputElem = (
        <select
          className={inputClass}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(({ value, displayValue }) => (
            <option key={value} value={value}>
              {displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      InputElem = (
        <input
          className={InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={Input}>
      <label className={Label}>{props.label} :</label>
      {InputElem}
    </div>
  );
};

export default Input;
