import SettingsSectionChoice from "./SettingsSectionChoice";
import classes from "./SettingsSectionChoices.module.css";
function SettingsSectionChoices(props) {
  const choisces = [
    "Your Account",
    "Twitter Blue",
    "Security and account access",
    "Privacy and safety",
    "Notifications",
    "Accessibility,Display and Languages",
    "Additional resources",
  ];
  const chosen = "Your Account";
  return (
    <div className={classes.choices}>
      {choisces.map((choice) => (
        <SettingsSectionChoice
          key={choice}
          name={choice}
          chosen={choice === chosen}
          onShow={() => {
            props.onShow();
          }}
        ></SettingsSectionChoice>
      ))}
    </div>
  );
}
export default SettingsSectionChoices;
