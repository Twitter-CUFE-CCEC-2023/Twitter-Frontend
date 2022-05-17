import AccountInfoItem from "./AccountInfoItem";
import classes from "./ChangePassword.module.css";
import classes1 from "../ProfileSection.module.css";
import React, { useEffect, useState } from "react";
import UserNameItem from "./UserNameItem";
import PrettyInput from "./PrettyInput";
import instance from "../../../axios";
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
  const [oldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmedPassword, setConfirmedPassword] = useState("");
  const [red, setRed] = useState(0);
  const [error, setError] = useState(0);

  useEffect(() => {
    setError(false);

    if (
      oldPassword.trim() != "" &&
      NewPassword.trim() == ConfirmedPassword.trim() &&
      NewPassword.trim() != "" &&
      NewPassword.length >= 8
    ) {
      setRed(false);
    } else {
      setRed(true);
    }
  }, [oldPassword, NewPassword, ConfirmedPassword]);
  function changePassword(e) {
    e.preventDefault();
    instance
      .put("/auth/update-password", {
        old_password: oldPassword,
        new_password: NewPassword,
      })
      .then((res) => {
        console.log(res);
        props.onGoBack();
      })
      .catch((err) => {
        console.log(err);
        setError(1);
      });
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
              value={oldPassword}
              changeValue={(val) => {
                setOldPassword(val);
              }}
            ></PrettyInput>
            <PrettyInput
              naming="new password"
              label="new password "
              placeHolder="Enter new password"
              value={NewPassword}
              changeValue={(val) => {
                setNewPassword(val);
              }}
            ></PrettyInput>
            <PrettyInput
              naming="confirm password"
              label="confirm password"
              placeHolder="confirm new password"
              value={ConfirmedPassword}
              changeValue={(val) => {
                setConfirmedPassword(val);
              }}
              red={red}
            ></PrettyInput>
          </div>
          <button
            // type="submit"
            className={`btn btn-primary ${classes.button}`}
            disabled={red}
            onClick={changePassword}
          >
            save
          </button>
          {error && (
            <span className={classes.error}>
              an error has ocurred ,try again or maybe your old password is
              wrong
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
