import React, { useState, Fragment } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from './ArrowBack.module.css';
import { useHistory } from "react-router-dom";

function ArrowBack() {
  const history = useHistory();

  const clickArrowBack = () => {
    history.goBack()
  }

  return (
    <Fragment>
      <div className={`${classes.arrowContainer}`} onClick={clickArrowBack}>
        <ArrowBackIcon className={classes.arrowBack} />
      </div>
    </Fragment>
  );
}

export default ArrowBack;
