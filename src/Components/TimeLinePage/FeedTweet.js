import React, { useState } from "react";
import classes from "./FeedTweet.module.css";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import TweetAtrribute from "./TweetAtrribute";
import MiniProfile from "./MiniProfile";
import FeedTweetReplyModal from "./FeedTweetReplyModal";

export default function FeedTweet(props) {
  const [replyModal, setReplyModal] = useState(false);
  function viewReplyModal() {
    setReplyModal(true);
  }
  function hideReplyModal() {
    setReplyModal(false);
  }
  {
    console.log(props.img);
  }
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
  function getDateDiff(date){
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffSeconds = Math.floor(diffTime / 1000);
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    if(diffDays > 0){
      return `${months[date1.getMonth()]} ${date1.getDate()}`;
    }
    if(diffHours > 0){
      return `${diffHours}h`
    }
    if(diffMinutes > 0){
      return `${diffMinutes}m`
    }
    if(diffSeconds > 0){
      return `${diffSeconds}s`
    }
  }


  return (
    <div className={classes.feedTweet}>
      {replyModal && (
        <FeedTweetReplyModal
          onHide={hideReplyModal}
          data={props}
        ></FeedTweetReplyModal>
      )}
      <img
        className={classes.profilePic + " " + classes.minip}
        alt="profile"
        src={props.profilePic}
      ></img>
      <div className={classes.hoverProfile + " " + classes.top}>
        <MiniProfile
          profilePic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
          name="Andrew"
          userName="andrew9991"
          profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
          following={777}
          followers={1863}
        />
      </div>
      <div className={classes.tweet}>
        <div className={classes.user}>
          <h2 className={classes.underline + " " + classes.minip + " " + classes.fs15}>
            {props.name}
          </h2>
          <div className={classes.hoverProfile + " " + classes.bot}>
            <MiniProfile
              profilePic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
              name="Andrew"
              userName="andrew9991"
              profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
              following={777}
              followers={1863}
            />
          </div>
          &nbsp;
          <p className={classes.gray + " " + classes.minip + " " + classes.fs15}>
            @{props.userName}
          </p>
          <div className={classes.hoverProfile + " " + classes.bot}>
            <MiniProfile
              profilePic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
              name="Andrew"
              userName="andrew9991"
              profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
              following={777}
              followers={1863}
            />
          </div>
          &nbsp;<p className={classes.gray}>.</p>&nbsp;
          <p className={classes.gray + " " + classes.underline + " " + classes.fs15}>{getDateDiff(props.date)}</p>{" "}
          {/*placeholder */}
        </div>
        <p className={classes.fs15}>{props.text}</p>

        {props.img && <img className={classes.tweetImg} src={props.img}></img>}
        <div className={classes.attributes}>
          <TweetAtrribute
            Icon={ChatBubbleOutlineOutlinedIcon}
            num={props.replies}
            color="b"
            tooltip="Reply"
            onClick={viewReplyModal}
          />
          <TweetAtrribute
            Icon={LoopOutlinedIcon}
            num={props.retweets}
            color="g"
            tooltip="Retweet"
          />
          <TweetAtrribute
            Icon={FavoriteBorderOutlinedIcon}
            FilledIcon={FavoriteIcon}
            num={props.likes}
            color="r"
            tooltip="Like"
          />
          <TweetAtrribute Icon={ShareOutlinedIcon} color="b" tooltip="Share" />
        </div>
      </div>
      {/* {!props.showAction && <div></div>} */}
    </div>
  );
}
