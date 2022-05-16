import classes from "./PrettyInput.module.css";
function PrettyInput(props) {
  return (
    <div className={`form-group ${classes.formWidth2}`}>
      <label htmlFor={props.naming} className={classes.label}>
        {props.label}
      </label>
      <input
        type="password"
        className="form-control"
        id={props.naming}
        aria-describedby="emailHelp"
        placeholder={props.placeHolder}
      />
    </div>
  );
}
export default PrettyInput;
