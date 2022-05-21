import classes from "./IsReplying.module.css";
function IsReplying(props) {
  return (
    <div className={classes["is-replying"]}>
      Replying to <a className={classes.anchor}>@{props.name}</a>
    </div>
  );
}
export default IsReplying;
