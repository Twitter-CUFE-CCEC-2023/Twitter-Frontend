import React from "react";
import "./TweetButton.css";
import RateReviewIcon from '@material-ui/icons/RateReview';

export default function TweetButton(){
  return (
    <div className= "button">
        <div className="icon">
            <RateReviewIcon/>
        </div>
        <p className="text">Tweet</p>
    </div>
  );
};

