import React from "react";
import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import ProfilesSection from "./ProfileSection/ProfileSection";
import classes from "./Settings.module.css";
import SettingsSection from "./SettingsSection/SettingsSection";
function Settings() {
  return (
    <div className={classes.settings}>
      <LeftSideBar />
      <div className={classes["right-conatiner"]}>
        <SettingsSection></SettingsSection>
        <ProfilesSection></ProfilesSection>
      </div>
    </div>
  );
}
export default Settings;
