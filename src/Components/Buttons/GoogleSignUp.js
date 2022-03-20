import React from "react";
import classes from "./GoogleSignUp.module.css";

const GoogleSignUp = (props) => {
  return (
    <div className={classes.googleSignUp} style={props.style}>
      <table>
        <tbody>
          <tr>
            <td className={classes.logo}>
              <img
                src="https://freesvg.org/img/1534129544.png"
                alt="GoogleLogo"
                width="20px"
              />
            </td>
            <td>Sign up with Google</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSignUp;
