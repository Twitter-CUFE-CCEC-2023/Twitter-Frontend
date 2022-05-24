import classes from "./ProfileSectionChoice.module.css";
function ProfileSectionChoice(props) {
  /**
   * @module ProfileSectionChoice
   */
  function choose() {
    /**
     * @name choose
     * @function choose
     * @description choose the current choice to render
     */
    props.onChoose(props.data.name);
  }
  return (
    <div
      className={classes.choice}
      onClick={
        ["account information", "change your password"].includes(
          props.data.name.toLowerCase()
        )
          ? choose
          : props.onShow
      }
    >
      <div className={classes["image-container"]}>
        <img src={props.data.image} className={classes.image}></img>
      </div>
      <div className={classes["data-container"]}>
        <div className={classes.name}>{props.data.name}</div>
        <div className={classes.description}>{props.data.description}</div>
      </div>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={` r-14j79pv r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-f727ji r-bnwqim r-1plcrui r-lrvibr ${classes["choice-svg"]}`}
      >
        <g>
          <path d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"></path>
        </g>
      </svg>
    </div>
  );
}
export default ProfileSectionChoice;
