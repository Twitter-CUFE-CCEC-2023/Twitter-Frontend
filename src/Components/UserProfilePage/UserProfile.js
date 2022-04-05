import React from "react";
import classes from "./UserProfile.module.css";
import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import ProfileData from "./ProfileData";
import RightSideBar from "../TimeLinePage/RightSideBar/RightSideBar";

function UserProfile() {
  return (
    <div className={classes.profilePage}>
      <LeftSideBar></LeftSideBar>
      <ProfileData></ProfileData>
      <RightSideBar></RightSideBar>
    </div>
  );
}

export default UserProfile;
