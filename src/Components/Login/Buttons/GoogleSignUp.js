import React from "react";
import classes from "./GoogleSignUp.module.css";
import googleLogo from "../../../Assets/googleLogo.png";

const GoogleSignUp = (props) => {
  return (
    <div className={classes.googleSignUp} style={props.style}>
      <table>
        <tbody>
          <tr>
            <td className={classes.logo}>
              <img src={googleLogo} alt="GoogleLogo" width="20px" />
            </td>
            <td>Sign up with Google</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSignUp;
