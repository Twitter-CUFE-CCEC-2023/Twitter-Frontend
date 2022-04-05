import React from "react";
import classes from "./RightSideBar.module.css";
import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening/WhatsHappening";
import WhoToFollow from "./WhoToFollow/WhoToFollow";

export default function RightSideBar() {
  return (
    <div className={classes.rightSideBar}>
      <SearchBar />
      <WhatsHappening />
      <WhoToFollow />
    </div>
  );
}
