import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./GoogleSignUp.module.css";
import googleLogo from "../../../Assets/googleLogo.png";
import axios from "../../axios";

const GoogleSignUp = (props) => {
  const history = useHistory();
  const handleClick = () => {
  axios
    .get("/auth/google", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log(response);
        history.push("/home");
      }
    })
    .catch((err) => { });
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
