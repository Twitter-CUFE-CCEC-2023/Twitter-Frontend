import React from "react";
import classes from "./LeftButton.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function LeftButton(props) {

  let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
  let history = useHistory();
  function reloadProfile(){
    if(props.title === "Profile"){
      history.push(`/userProfile/${loggedUser.username}`);
      window.location.reload();
    }
  }

  return ( 
      <NavLink to={`/${props.url}`} className={classes.navLink} onClick={reloadProfile}>
      <div
        className={`${classes.leftButton} ${props.onPage && classes.onPage}`}
      >
        {!props.onPage && <props.Icon />}
        {props.onPage && <props.IconActive />}
        <p className={classes.title}>{props.title}</p>
      </div>
    </NavLink>
  );
}
