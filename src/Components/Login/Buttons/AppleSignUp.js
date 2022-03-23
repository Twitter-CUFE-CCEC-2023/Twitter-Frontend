import React from "react";
import classes from "./AppleSignUp.module.css";
import AppleIcon from "@material-ui/icons/Apple";

const AppleSignUp = () => {
  return (
    <div className={classes.appleSignUp}>
      <table>
        <tbody>
          <tr>
            <td className={classes.logo}>
              <AppleIcon />
            </td>
            <td>Sign up with Apple</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppleSignUp;
