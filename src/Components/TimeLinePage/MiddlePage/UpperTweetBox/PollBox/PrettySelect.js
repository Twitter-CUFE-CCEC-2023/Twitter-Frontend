import classes from "./PrettySelect.module.css";
import { useState } from "react";
import "./PrettySelect.module.css";
export default function PrettySelect(props) {
  const [options, setOptions] = useState(props.data);
  const optionsKeys = Object.keys(options);
  function changeState(e) {
    props.onChange(e.target.value);
  }
  return (
    <select
      className={`form-select ${classes.width}${
        props.classname ? props.classname : ""
      } ${props.red ? classes.red : ""}`}
      aria-label="Default select example"
      onChange={changeState}
    >
      <option disabled={props.noDefault} selected={!props.noDefault}>
        {props.option}
      </option>
      {optionsKeys.map((key, index) => {
        return (
          <option
            key={key}
            value={key}
            selected={key == props.chosen && props.noDefault}
          >
            {options[key]}
          </option>
        );
      })}
    </select>
  );
}
