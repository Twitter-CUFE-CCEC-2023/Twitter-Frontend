import AccountInfoItem from "./AccountInfoItem";
import classes from "./AccountInfo.module.css";
import classes1 from "../ProfileSection.module.css";
import React, { useState } from "react";
import UserNameItem from "./UserNameItem";
export default function AccountInfo(props) {
  const [Info, setInfo] = useState([
    { id: 0, name: "username", value: "mena_lateaf" },
    { id: 1, name: "Phone", value: "01276011964" },
    { id: 2, name: "email", value: "mena.lateaf@gmail.com" },
    { id: 3, name: "verified", value: false },
    { id: 4, name: "protected tweets", value: false },
    {
      id: 5,
      name: "account creation",
      value: `Mar 25, 2022, 4:10:18 PM
    62.114.47.17 (Egypt)`,
    },
    { id: 6, name: "country", value: "Egypt" },
    //{ name: "languages", value1: "arabic", value2: "english" },
    { id: 7, name: "gender", value: "malle" },
    { id: 8, name: "birth date", value: "14/8/2000" },
    { id: 9, name: "age", value: "21" },
    { id: 10, name: "automation", value: "manage your automated account" },
  ]);
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
  function userNameChangeHandler(value) {
    setChosenInfoItem(undefined);
    let copy = Info;
    copy[chosenInfoId].value = value;
    setInfo(copy);
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
                key={item.id}
                onModify={modifyChosenInfoItemHandler}
              ></AccountInfoItem>
            ))}
          </div>
        </React.Fragment>
      ) : chosenInfoItem.toLowerCase() === "username" ? (
        <UserNameItem
          onGoBack={goBack}
          value={chosenInfoValue}
          onSave={userNameChangeHandler}
        ></UserNameItem>
      ) : chosenInfoItem.toLowerCase() === "" ? (
        <UserNameItem
          onGoBack={goBack}
          value={chosenInfoValue}
          id={chosenInfoId}
        ></UserNameItem>
      ) : (
        ""
      )}
    </div>
  );
}
