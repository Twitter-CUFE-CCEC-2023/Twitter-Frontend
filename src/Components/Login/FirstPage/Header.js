import React from "react";
import classes from "./Header.module.css";

import twitterBlueLogo from "../../../Assets/twitterBlueLogo.png";

const Header = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.twitterBluelogo}
        src={twitterBlueLogo}
        alt="TwitterLogo"
      />
      <h1 className={classes.heading}>Happening now</h1>
      <p className={classes.content}>Join Twitter today.</p>
    </div>
  );
};

export default Header;
