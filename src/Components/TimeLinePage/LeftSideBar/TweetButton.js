import React from "react";
import classes from "./TweetButton.module.css";
import RateReviewIcon from '@material-ui/icons/RateReview';

export default function TweetButton(){
  return (
    <div className={classes.button}>
        <div className={classes.icon}>
            <RateReviewIcon/>
        </div>
        <p className={classes.text}>Tweet</p>
    </div>
  );
};

