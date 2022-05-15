import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../TimeLinePage/MiddlePage/FeedTweet";
import classes from "./SingleMentionNotification.module.css";
import instance from "../../axios";

function SingleMentionNotification(props) {
  const readNote = async () => {
    await instance.put("/read-notification", { notificationId: props.note_id });
  };

  return (
    <div className={props.is_read ? "" : classes.is_read} onClick={readNote}>
      <FeedTweet {...props} />
    </div>
  );
}
export default SingleMentionNotification;
