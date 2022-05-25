import classes from "./TweetReplyBody.module.css";
import DefaultProfilePic from "../../../../Assets/DefaultProfilePic.jpg";
import MiniProfile from "../../MiniProfile";
import ImageGrid from "../../MiddlePage/ImageGrid";
import { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function TweetReplyBody(props) {
  const tweetDate = new Date(props.date);
  let profilePic = props.profilePic ? props.profilePic : DefaultProfilePic;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function getDateDiff(date) {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffSeconds = Math.floor(diffTime / 1000);
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

    if (diffYears > 0) {
      return `${
        months[date1.getMonth()]
      } ${date1.getDate()}, ${date1.getFullYear()}`;
    }
    if (diffDays > 0) {
      return `${months[date1.getMonth()]} ${date1.getDate()}`;
    }
    if (diffHours > 0) {
      return `${diffHours}h`;
    }
    if (diffMinutes > 0) {
      return `${diffMinutes}m`;
    }
    if (diffSeconds > 0) {
      return `${diffSeconds}s`;
    }
  }
  const [tweetText, setTweetText] = useState(props.text);
  return (
    <div
      id={`Tweet${props.tweetId}`}
      className={props.isTopTweet ? classes.topTweet : classes.feedTweet}
    >
      <img
        className={classes.profilePic + " " + classes.minip}
        alt="profile"
        src={profilePic}
      ></img>
      <div className={classes.hoverProfile + " " + classes.top}>
        <MiniProfile
          profilePic={profilePic}
          name={props.name}
          userName={props.userName}
          profileDesciption={props.bio}
          following={props.following}
          followers={props.followers}
        />
      </div>
      {/* </NavLink> */}

      <div className={classes.tweet}>
        <div className={classes.user}>
          <h2
            data-testid="name"
            className={
              classes.underline +
              " " +
              classes.fs15 +
              " " +
              classes.pointer +
              " " +
              classes.alignTop
            }
          >
            {props.name}{" "}
            {props.isVerified && (
              <CheckCircleIcon className={classes.verifiedIcon} />
            )}
          </h2>
          <div className={classes.hoverProfile + " " + classes.bot}>
            <MiniProfile
              profilePic={profilePic}
              name={props.name}
              userName={props.userName}
              profileDesciption={props.bio}
              following={props.following}
              followers={props.followers}
            />
          </div>
          <div className={classes.hoverProfile + " " + classes.bot}>
            <MiniProfile
              profilePic={profilePic}
              name={props.name}
              userName={props.userName}
              profileDesciption={props.bio}
              following={props.following}
              followers={props.followers}
            />
          </div>
          &nbsp;{!props.isTopTweet && <p className={classes.gray}>.</p>}&nbsp;
          {!props.isTopTweet && (
            <p
              className={
                classes.gray + " " + classes.underline + " " + classes.fs15
              }
              data-testid="date"
            >
              {getDateDiff(props.date)}
            </p>
          )}
        </div>
        {props.isReply && (
          <div className={classes.flex}>
            <p className={`${classes.gray} ${classes.fs15} ${classes.nom}`}>
              Replying to{" "}
            </p>
            &nbsp;
            <p
              className={`${classes.gray}  ${classes.fs15} ${classes.minip} ${classes.replyat} ${classes.nom}`}
            >
              @{props.topUser ? props.topUser.userName : ""}
            </p>
            <div className={classes.hoverProfile + " " + classes.repmin}>
              <MiniProfile
                profilePic={
                  props.topUser
                    ? props.topUser.profilePic
                      ? props.topUser.profilePic
                      : DefaultProfilePic
                    : ""
                }
                name={props.topUser ? props.topUser.name : ""}
                userName={props.topUser ? props.topUser.userName : ""}
                profileDesciption={props.topUser ? props.topUser.bio : ""}
                following={props.following}
                followers={props.followers}
              />
            </div>
          </div>
        )}
        <div
          data-testid="text"
          className={classes.fs15 + " " + classes.txt}
          dangerouslySetInnerHTML={{ __html: tweetText }}
        ></div>
        {props.media && !props.isShowPhotos && props.media.length > 0 && (
          <ImageGrid
            media={props.media}
            userName={props.userName}
            tweetId={props.tweetId}
            setPhotosActive={props.setPhotosActive}
            setIncrement={props.setIncrement}
          />
        )}

        {props.isTopTweet && (
          <div
            className={classes.flex + " " + classes.gray + " " + classes.m10}
          >
            <p
              className={
                classes.underline + " " + classes.fs15 + " " + classes.pointer
              }
            >
              {`${tweetDate.getHours()}:${tweetDate.getMinutes()} . ${
                months[tweetDate.getMonth()]
              } ${tweetDate.getDay()}, ${tweetDate.getFullYear()}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
