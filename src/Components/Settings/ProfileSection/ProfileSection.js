import classes from "./ProfileSection.module.css";
import ProfileSectionChoices from "./ProfileSectionChoices";
function ProfilesSection() {
  {
    /* <SettingsSectionChoices></SettingsSectionChoices> */
  }
  return (
    <div className={classes["profile-section"]}>
      <h2 className={classes["profile-section-header"]}>Your account</h2>
      <p className={classes["profile-span"]}>
        see information about your account ,donload an archive of your data ,or
        learn about your account deactivation options
      </p>
      <ProfileSectionChoices></ProfileSectionChoices>
    </div>
  );
}

export default ProfilesSection;
