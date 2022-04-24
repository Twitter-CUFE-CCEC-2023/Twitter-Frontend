import classes from "./UserNameItem.module.css";
import classes1 from "../ProfileSection.module.css";
import React, { useState } from "react";
function UserNameItem(props) {
  const [UserNameValue, setUserNameValue] = useState(props.value);
  const initial = props.value;
  function UserNameValueChangeHandler(e) {
    setUserNameValue(e.target.value);
  }
  function saveName(e) {
    e.preventDefault();
    props.onSave(UserNameValue);
  }
  return (
    <React.Fragment>
      <h2 className={classes1["profile-section-header"]}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03 ${classes1["profile-section-svg"]}`}
          onClick={props.onGoBack}
        >
          <g>
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
          </g>
        </svg>
        change username
      </h2>
      <form className={classes.form}>
        <input
          type="text"
          className="form-control"
          placeholder="username"
          value={UserNameValue}
          onChange={UserNameValueChangeHandler}
        />
        <div className={classes["button-container"]}>
          <button
            type="submit"
            className={classes.button}
            disabled={initial == UserNameValue}
            onClick={saveName}
          >
            save
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
export default UserNameItem;
