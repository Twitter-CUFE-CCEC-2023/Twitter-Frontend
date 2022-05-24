import React, { useState } from "react";
import AccountInfo from "./AccountInfo/AccountInfo";
import ChangePassword from "./AccountInfo/ChangePassword";
import classes from "./ProfileSection.module.css";
import ProfileSectionChoices from "./ProfileSectionChoices";
function ProfilesSection(props) {
  /**
   * @module ProfilesSection
   */
  {
    /* <SettingsSectionChoices></SettingsSectionChoices> */
  }
  const [chosenOption, setChosenOption] = useState(undefined);
  function changeChosenOptionHandler(name) {
    /**
     * @name changeChosenOptionHandler
     * @function changeChosenOptionHandler
     * @description is responsible for rendering the chosen option
     */
    setChosenOption(name);
  }
  function goBack() {
    /**
     * @name goBack
     * @function goBack
     * @description returns to the main profile section page
     */
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
            onShow={props.onShow}
          ></ProfileSectionChoices>
        </div>
      ) : // the code for profile section when account inforrmation is chosen
      chosenOption.toLowerCase() === "account information" ? (
        <AccountInfo onGoBack={goBack} onShow={props.onShow}></AccountInfo>
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
