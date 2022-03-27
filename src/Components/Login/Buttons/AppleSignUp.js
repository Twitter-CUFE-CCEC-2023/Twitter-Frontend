import React from "react";
import classes from "./AppleSignUp.module.css";
import AppleIcon from "@material-ui/icons/Apple";

const AppleSignUp = (props) => {
  return (
    <div className={classes.appleSignUp}>
      <table>
        <tbody>
          <tr>
            <td className={classes.logo}>
              <AppleIcon />
            </td>
            <td className={classes.content}>{props.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppleSignUp;
