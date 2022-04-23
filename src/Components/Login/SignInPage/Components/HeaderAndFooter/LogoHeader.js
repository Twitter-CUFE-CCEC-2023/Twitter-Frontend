import React from "react";
import { NavLink } from "react-router-dom";
import classess from "./LogoHeader.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import twitterBlueLogo from "../../../../../Assets/twitterBlueLogo.png";

const LogoHeader = () => {
  return (
    <div className={classess.header}>
      <img
        className={classess.twitterBluelogo}
        src={twitterBlueLogo}
        alt="TwitterLogo"
      />
      <NavLink to="/" className={classess.closeIcon}>
        <ClearIcon />
      </NavLink>
    </div>
  );
};

export default LogoHeader;
