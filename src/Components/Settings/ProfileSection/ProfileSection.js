import React, { useState } from "react";
import AccountInfo from "./AccountInfo/AccountInfo";
import ChangePassword from "./AccountInfo/ChangePassword";
import classes from "./ProfileSection.module.css";
import ProfileSectionChoices from "./ProfileSectionChoices";
function ProfilesSection() {
  {
    /* <SettingsSectionChoices></SettingsSectionChoices> */
  }
  const [chosenOption, setChosenOption] = useState(undefined);
  function changeChosenOptionHandler(name) {
    setChosenOption(name);
  }
  function goBack() {
    setChosenOption(undefined);
  }
  return (
    <React.Fragment>
      {chosenOption === undefined ? (
        // the main code for profile section
        <div className={classes["profile-section"]}>
          <h2 className={classes["profile-section-header"]}>Your account</h2>
          <p className={classes["profile-span"]}>
            see information about your account ,donload an archive of your data
            ,or learn about your account deactivation options
          </p>
          <ProfileSectionChoices
            chosen={chosenOption}
            onChangeChosenOption={changeChosenOptionHandler}
          ></ProfileSectionChoices>
        </div>
      ) : // the code for profile section when account inforrmation is chosen
      chosenOption.toLowerCase() === "account information" ? (
        <AccountInfo onGoBack={goBack}></AccountInfo>
      ) : (
        // the code for profile section when change your password is chosen

        chosenOption.toLowerCase() === "change your password" && (
          <ChangePassword onGoBack={goBack}></ChangePassword>
        )
      )}
    </React.Fragment>
  );
}

export default ProfilesSection;
