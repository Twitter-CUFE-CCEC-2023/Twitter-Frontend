import React, { useState } from "react";
import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import Modal from "../UI/Modal";
import ProfilesSection from "./ProfileSection/ProfileSection";
import classes from "./Settings.module.css";
import SettingsSection from "./SettingsSection/SettingsSection";
function Settings() {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  return (
    <div className={classes.settings}>
      {showUnderConstruction && (
        <Modal
          onHide={() => {
            setShowUnderConstruction(false);
          }}
          data={{
            header: "under construction page",
            message:
              "we are sorry , but this feature doesn't work on the current time . follow for more updates",
            button: "ok",
          }}
        ></Modal>
      )}
      <LeftSideBar />
      <div className={classes["right-conatiner"]}>
        <SettingsSection
          onShow={() => {
            setShowUnderConstruction(true);
          }}
        ></SettingsSection>
        <ProfilesSection
          onShow={() => {
            setShowUnderConstruction(true);
          }}
        ></ProfilesSection>
      </div>
    </div>
  );
}
export default Settings;
