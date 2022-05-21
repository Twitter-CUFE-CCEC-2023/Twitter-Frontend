import classes from "./PrettyInput.module.css";
function PrettyInput(props) {
  function inputChangedHandler(e) {
    // console.log(props.changeValue);
    props.changeValue(e.target.value);
  }
  return (
    <div className={`form-group ${classes.formWidth2}`}>
      <label htmlFor={props.naming} className={classes.label}>
        {props.label}
      </label>
      <input
        type="password"
        className={`form-control ${props.red ? classes.red : ""}`}
        id={props.naming}
        aria-describedby="emailHelp"
        placeholder={props.placeHolder}
        value={props.value}
        onChange={inputChangedHandler}
      />
    </div>
  );
}
export default PrettyInput;
