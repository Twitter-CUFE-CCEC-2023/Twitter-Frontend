import React from "react";
import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <React.Fragment>
      <div className={classes.background} onClick={props.onHide}></div>
      <div className={classes.body}>
        <div className={classes.header}>{props.data.header}</div>
        <div className={classes.message}>{props.data.message}</div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onHide}>
            {props.data.button}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Modal;
