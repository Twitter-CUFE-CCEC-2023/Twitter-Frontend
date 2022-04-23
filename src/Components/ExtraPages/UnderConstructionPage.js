import React from "react";

import classes from "./UnderConstructionPage.module.css";
// import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import LeftSideBar from "../TimeLinePage/LeftSideBar/LeftSideBar";
import underConstructionLogo from "../../Assets/underconstruction.jpg";

const UnderConstructionPage = () => {
  return (
    <div className={classes.container}>
      <LeftSideBar />
      <div className={classes.middlePage}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={underConstructionLogo}
            alt="page under construction"
          />
        </div>
        <h1 className={classes.content}>Coming Soon 📢, Stay Tuned</h1>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
