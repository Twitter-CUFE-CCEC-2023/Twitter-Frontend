import React from "react";
import classes from "./Home.module.css";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Feed from "./MiddlePage/Feed";
import RightSideBar from "./RightSideBar/RightSideBar";

export default function Home() {
  return (
    <div className={classes.timeLine}>
      <LeftSideBar />
      <Feed/>
      <RightSideBar />
    </div>
  );
}
