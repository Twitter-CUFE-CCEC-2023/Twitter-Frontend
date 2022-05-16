import classes from "./Reply.module.css";
import defaultMaleProfile from "../../../../Assets/defaultMaleProfile.jpg";
import { useState } from "react";
export default function Reply(props) {
  let loggedUser = JSON.parse(localStorage.getItem("UserInfo"));
  const [tweetContent, setTweetContent] = useState("");
  function textAreaChangeHandler(event) {
    setTweetContent(event.target.value);
  }
  return (
    <div className={classes.container}>
      <img
        className={classes.profilePic + " " + classes.minip}
        src={loggedUser ? loggedUser.profile_image_url : defaultMaleProfile}
        alt="profile"
      ></img>
      <div className={classes.tweetBoxFormContainer}>
        <textarea
          onChange={textAreaChangeHandler}
          className={classes.tweetBoxText}
          placeholder={props.isReply ? "Tweet Your Reply" : "What's happening?"}
          value={tweetContent}
          maxLength="280"
        ></textarea>
      </div>
    </div>
  );
}
