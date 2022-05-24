import React, { useState, Fragment } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "./ArrowBack.module.css";
import { useHistory, useLocation } from "react-router-dom";

function ArrowBack() {
  const history = useHistory();
  const pathlocation = useLocation();
  let prevLocation;
  localStorage.setItem("userlocation", JSON.stringify(pathlocation.pathname));
  history.listen((nextLocation) => {
    console.log(prevLocation, "prev location");
    // ...
    prevLocation = nextLocation;
  });
  const clickArrowBack = () => {
    

    // localStorage.setItem("userlocation", JSON.stringify(pathlocation.pathname));
    //getuserlocation from local storage
    let userlocation = JSON.parse(localStorage.getItem("userlocation"));
    // history.push(userlocation);

    // history.goBack();
  };

  return (
    <Fragment>
      <div className={`${classes.arrowContainer}`} onClick={clickArrowBack}>
        <ArrowBackIcon className={classes.arrowBack} />
      </div>
    </Fragment>
  );
}

export default ArrowBack;
