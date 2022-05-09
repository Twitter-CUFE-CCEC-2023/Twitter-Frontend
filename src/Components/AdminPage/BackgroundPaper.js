import React from "react";
import classes from "./BackgroundPaper.module.css";
import Paper from "@material-ui/core/Paper";

function BackgroundPaper(props) {
  return <Paper className={classes.container}>{props.children}</Paper>;
}

export default BackgroundPaper;
