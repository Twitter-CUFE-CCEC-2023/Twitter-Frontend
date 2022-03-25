import React, { useState } from "react";
import "./FeedTweet.css";
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
  return (
    <div className="feedTweet">
      {replyModal && (
        <FeedTweetReplyModal onHide={hideReplyModal}></FeedTweetReplyModal>
      )}
      <img className="profilePic" alt="profile" src={props.profilePic}></img>
      <div className="hoverProfile">
        <MiniProfile
          profilePic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
          name="Andrew"
          userName="andrew9991"
          profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler "
          following={777}
          followers={1863}
        />
      </div>
      <div className="tweet">
        <div className="user">
          <h2 className="underline">{props.name}</h2>
          &nbsp;
          <p className="gray">@{props.userName}</p>
          &nbsp;<p className="gray">.</p>&nbsp;
          <p className="gray underline">12h</p> {/*placeholder */}
        </div>
        <p>{props.text}</p>
        <div className="attributes">
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
    </div>
  );
}
