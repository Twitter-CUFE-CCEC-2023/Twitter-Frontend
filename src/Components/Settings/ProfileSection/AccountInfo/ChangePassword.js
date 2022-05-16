import AccountInfoItem from "./AccountInfoItem";
import classes from "./ChangePassword.module.css";
import classes1 from "../ProfileSection.module.css";
import React, { useState } from "react";
import UserNameItem from "./UserNameItem";
import PrettyInput from "./PrettyInput";
export default function AccountInfo(props) {
  const [chosenInfoItem, setChosenInfoItem] = useState(undefined);
  const [chosenInfoValue, setChosenInfoValue] = useState(undefined);
  const [chosenInfoId, setchosenInfoId] = useState(undefined);

  function modifyChosenInfoItemHandler(name, value, id) {
    setChosenInfoItem(name);
    setChosenInfoValue(value);
    setchosenInfoId(id);
  }
  function goBack() {
    setChosenInfoItem(undefined);
  }
  return (
    <div className={classes1["profile-section"]}>
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
        change your password
      </h2>
      <div className={classes.form}>
        <form className={classes["form-righter"]}>
          <div className={classes.formWidth}>
            <PrettyInput
              naming="current password"
              label="current password "
              placeHolder="Enter current password"
            ></PrettyInput>
            <PrettyInput
              naming="new password"
              label="new password "
              placeHolder="Enter new password"
            ></PrettyInput>
            <PrettyInput
              naming="confirm password"
              label="confirm password"
              placeHolder="confirm new password"
            ></PrettyInput>
          </div>
          <button type="submit" className={`btn btn-primary ${classes.button}`}>
            save
          </button>
        </form>
      </div>
    </div>
  );
}
