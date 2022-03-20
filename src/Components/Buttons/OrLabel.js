import React from "react";
import classes from "./OrLabel.module.css";

const OrLabel = (props) => {
  return (
    <table className={classes.container} style={props.style}>
      <tbody>
        <tr>
          <td>
            <div
              className={classes.straightLine}
              style={{ borderColor: `${props.color}` }}
            ></div>
          </td>
          <td>
            <div className={classes.content}>or</div>
          </td>
          <td>
            <div
              className={classes.straightLine}
              style={{ borderColor: `${props.color}` }}
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrLabel;
