import SearchSettings from "./SearchSettings";
import classes from "./SettingsSection.module.css";
import SettingsSectionChoices from "./SettingsSectionChoices";
function SettingsSection() {
  return (
    <div className={classes["settings-section"]}>
      <h2 className={classes["settings-section-header"]}>settings</h2>
      <SearchSettings></SearchSettings>
      <SettingsSectionChoices></SettingsSectionChoices>
    </div>
  );
}
export default SettingsSection;
