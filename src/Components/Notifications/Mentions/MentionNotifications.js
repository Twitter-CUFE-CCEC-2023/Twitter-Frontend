import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./MentionNotifications.module.css";
import NotificationsNavBar from "../NotificationsNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import instance from "../../axios";
import ReactLoading from "react-loading";
import axios from "axios";
import SingleMentionNotification from "./SingleMentionNotification";

function MentionNotifications(props) {
  const [isLoading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [repliesNum, setRepliesNum] = useState(0);
  let isMock = localStorage.getItem("isMock") === "true";

  const observer = useRef();
  const lastNotificationElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const currentUser = JSON.parse(localStorage.getItem("UserInfo"));

  const [notReadNotes, setNotReadNotes] = useState(0);

  useEffect(() => getNotifications(), [pageNumber]);

  const getNotifications = async () => {
    setLoading(true);
    let notes;
    let userNotifications;
    if (!isMock) {
      if (!props.testUrl) {
        notes = await instance.get(`/notifications/list/${pageNumber}/5`);
        console.log("notes", notes);
        userNotifications = notes.data.notifications;
      } else {
        notes = await axios.get(props.testUrl);
        userNotifications = notes.data.notifications;
      }
    } else {
      await fetch(
        `${instance.baseURL}/notifications?_page=${pageNumber}&_limit=5`
      )
        .then((res) => res.json())
        .then((notes) => {
          userNotifications = notes;
        });
    }

    userNotifications.forEach((notes) => {
      let notification;
      if (notes.notification_type === "Reply") {
        notification = {
          name: notes.related_user.name,
          profilePic: notes.related_user.profile_image_url,
          userName: notes.related_user.username,
          isVerified: notes.related_user.isVerified,
          bio: notes.related_user.bio,
          followers: notes.related_user.followers_count,
          following: notes.related_user.following_count,
          text: notes.tweet.content,
          tweetId: notes.tweet.id,
          date: notes.tweet.created_at,
          replies: notes.tweet.replies,
          likes: notes.tweet.likes_count,
          retweets: notes.tweet.retweets_count,
          quotes: notes.tweet.quotes_count,
          isLiked: notes.tweet.is_liked,
          isRetweeted: notes.tweet.is_retweeted,
          isReply: notes.tweet.is_reply,
          media: notes.tweet.media,
          gif: notes.tweet.gif ? notes.tweet.gif : "",
          is_read: notes.is_read,
          note_id: notes._id,
          isFollowing: notes.related_user.is_followed,
          topUser: {
            name: currentUser.name,
            profilePic: currentUser.profile_image_url,
            userName: currentUser.username,
            isVerified: currentUser.isVerified,
            bio: currentUser.bio,
            followers: currentUser.followers_count,
            following: currentUser.following_count,
            isFollowing: currentUser.is_followed,
          },
        };
        setRepliesNum(repliesNum + 1);
      } else {
        return;
      }
      if (!notes.is_read) {
        setNotReadNotes(notReadNotes + 1);
      }
      setNotifications((prevNotifications) => {
        return [...prevNotifications, notification];
      });
    });
    setLoading(false);
    setHasMore(userNotifications.length === 5);
  };

  if (repliesNum === 0) {
    return (
      <div className={classes.notes}>
        <NotificationsNavBar selected={false} notReadNotesNum={notReadNotes} />
        {!isLoading && (
          <div className="row mt-4">
            <div className="col-12">
              <h6>Nothing to see here yet</h6>
            </div>
            <div className="col-12">
              <h3>When someone mentions you, you'll find it here</h3>
            </div>
          </div>
        )}
        {isLoading && (
          <ReactLoading
            type={"spin"}
            color={"#1DA1F2"}
            height={"4%"}
            width={"4%"}
            className={`${classes.loadingIcon}`}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className={classes.notes}>
        <NotificationsNavBar selected={false} />
        {notifications.map((notification, index) => {
          if (index === notifications.length - 1) {
            let tid = `${index}`;
            return (
              <div
                ref={lastNotificationElementRef}
                key={index}
                data-testid={`${index}`}
              >
                <SingleMentionNotification
                  {...notification}
                  showAction={true}
                />
              </div>
            );
          } else {
            let tid = `${index}`;
            return (
              <div data-testid={`${index}`}>
                <SingleMentionNotification
                  {...notification}
                  key={index}
                  showAction={true}
                />
              </div>
            );
          }
        })}
        {isLoading && (
          <ReactLoading
            type={"spin"}
            color={"#1DA1F2"}
            height={"4%"}
            width={"4%"}
            className={`${classes.loadingIcon}`}
          />
        )}
      </div>
    );
  }
}
export default MentionNotifications;
