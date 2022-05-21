import { useState } from "react";
import classes from "./PrettyInputOnly.module.css";
function PrettyInputOnly(props) {
  const [content, setContent] = useState("");
  function contentChangeHanler(e) {
    setContent(e.target.value);
  }
  return (
    <div className={`form-group ${classes.formWidth2}`}>
      <div className={classes["input-wrapper"]}>
        <input
          type="text"
          className="form-control"
          id={props.naming}
          aria-describedby="emailHelp"
          placeholder={`${props.placeHolder}${
            props.optional ? " (optional)" : ""
          }`}
          value={content}
          onChange={contentChangeHanler}
          maxLength="25"
        />
        <span className={classes.size}>{content.length}/25</span>
      </div>
    </div>
  );
}
export default PrettyInputOnly;
