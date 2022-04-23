import AccountInfoItem from "./AccountInfoItem";
import classes from "./AccountInfo.module.css";
import classes1 from "../ProfileSection.module.css";
import React, { useState } from "react";
import UserNameItem from "./UserNameItem";
import { info } from "fontawesome";
export default function AccountInfo(props) {
  const Info = [
    { name: "username", value: "mena_lateaf" },
    { name: "Phone", value: "01276011964" },
    { name: "email", value: "mena.lateaf@gmail.com" },
    { name: "verified", value: false },
    { name: "protected tweets", value: false },
    {
      name: "account creation",
      value: `Mar 25, 2022, 4:10:18 PM
    62.114.47.17 (Egypt)`,
    },
    { name: "country", value: "Egypt" },
    // { name: "languages", value1: "arabic", value2: "english" },
    { name: "gender", value: "malle" },
    { name: "birth date", value: "14/8/2000" },
    { name: "age", value: "21" },
    { name: "automation", value: "manage your automated account" },
  ];
  const [chosenInfoItem, setChosenInfoItem] = useState(undefined);
  const [chosenInfoVAlue, setChosenInfoValue] = useState(undefined);
  function modifyChosenInfoItemHandler(name, value) {
    setChosenInfoItem(name);
    setChosenInfoValue(value);
  }
  function goBack() {
    setChosenInfoItem(undefined);
  }
  return (
    <div className={classes1["profile-section"]}>
      {chosenInfoItem === undefined ? (
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
            Account information
          </h2>
          <div className={classes.items}>
            {Info.map((item) => (
              <AccountInfoItem
                data={item}
                key={item.name}
                onModify={modifyChosenInfoItemHandler}
              ></AccountInfoItem>
            ))}
          </div>
        </React.Fragment>
      ) : chosenInfoItem.toLowerCase() === "username" ? (
        <UserNameItem onGoBack={goBack} value={chosenInfoVAlue}></UserNameItem>
      ) : (
        ""
      )}
    </div>
  );
}
