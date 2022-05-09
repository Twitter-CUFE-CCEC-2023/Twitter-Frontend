import React from "react";

import ClearIcon from "@material-ui/icons/Clear";
import { useHistory } from "react-router-dom";

import classess from "./LogoHeader.module.css";
import twitterBlueLogo from "../../../../../Assets/twitterBlueLogo.png";

const LogoHeader = () => {
  const history = useHistory();

  const handleClick = () => {
    history.replace("/");
  };

  return (
    <div className={classess.header}>
      <img
        className={classess.twitterBluelogo}
        src={twitterBlueLogo}
        alt="TwitterLogo"
      />

      <p className={classess.closeIcon} onClick={handleClick}>
        <ClearIcon />
      </p>
    </div>
  );
};

export default LogoHeader;
