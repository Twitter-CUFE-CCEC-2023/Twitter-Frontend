import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./GoogleSignUp.module.css";
import googleLogo from "../../../Assets/googleLogo.png";
import axios from "../../axios";
import { nodeJs } from "fontawesome";

const GoogleSignUp = (props) => {
  const history = useHistory();
  const handleClick = () => {
    window.open("https://backlb.twittercloneteamone.tk/auth/google","_self");
  };

  return (
    <div className={classes.googleSignUp} style={props.style} onClick={handleClick}>
      <table>
        <tbody>
          <tr>
            <td className={classes.logo}>
              <img src={googleLogo} alt="GoogleLogo" width="20px" />
            </td>
            <td>{props.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSignUp;
