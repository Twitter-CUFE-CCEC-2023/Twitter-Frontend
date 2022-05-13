import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../TimeLinePage/MiddlePage/FeedTweet";
import classes from "./SingleMentionNotification.module.css";

function SingleMentionNotification(props) {
  return (
    <div className={props.is_read ? "" : classes.is_read}>
      <FeedTweet {...props} />
    </div>
  );
}
export default SingleMentionNotification;
