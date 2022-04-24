import React from "react";
import classes from "./FollowingFollowersPage.module.css";
import LeftSideBar from "../../TimeLinePage/LeftSideBar/LeftSideBar";
import RightSideBar from "../../TimeLinePage/RightSideBar/RightSideBar";
import ProfileHeader from "../ProfileHeader";

function FollowingFollowersPage() {
  return (
    <div className={classes.followingFollowersPage}>
      <LeftSideBar />
      <div className={classes.followingFollowersContainer}>
      <div className={`${classes.header} row`}>
        <ProfileHeader></ProfileHeader>
      </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default FollowingFollowersPage;
