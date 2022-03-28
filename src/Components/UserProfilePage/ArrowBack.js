import React, { useState, Fragment } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from './ArrowBack.module.css';

function ArrowBack() {
  return (
    <Fragment>
      <div className={`${classes.arrowContainer}`}>
        <ArrowBackIcon className={classes.arrowBack}/>
      </div>
    </Fragment>
  );
}

export default ArrowBack;
