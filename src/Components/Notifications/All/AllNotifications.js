import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./AllNotifications.module.css";
import NotificationsNavBar from "../NotificationsNavBar";
import SingleNotification from "./SingleNotification";
import "bootstrap/dist/css/bootstrap.min.css";
import instance from "../../axios";
import ReactLoading from "react-loading";
import axios from "axios";
import FeedTweet from "../../TimeLinePage/MiddlePage/FeedTweet";
import SingleMentionNotification from "./../Mentions/SingleMentionNotification";

function AllNotifications(props) {
  const [isLoading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
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

  useEffect(() => getNotifications(), [pageNumber]);

  const [notReadNotes, setNotReadNotes] = useState(0);

  const getNotifications = async () => {
    setLoading(true);
    let notes;
    let userNotifications;
    if (!isMock) {
      if (!props.testUrl) {
        notes = await instance.get(`/notifications/list/${pageNumber}/5`);
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
      console.log("notes", notes);
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
          type: notes.notification_type,
          is_read: notes.is_read,
          note_id: notes._id,
          isFollowed: notes.related_user.is_followed,
        };
      } else if (notes.notification_type === "Account Update") {
        notification = {
          type: notes.notification_type,
          content: notes.content,
          personID: currentUser.username,
          is_read: notes.is_read,
          note_id: notes._id,
        };
      } else {
        notification = {
          Person: notes.related_user.name,
          personID: notes.related_user.username,
          type: notes.notification_type,
          profilePicture: notes.related_user.profile_image_url,
          //tweetID: notes.tweet.id,
          uid: currentUser ? currentUser.username : "amrzaki",
          is_read: notes.is_read,
          bio: notes.related_user.bio,
          following: notes.related_user.following_count,
          followers: notes.related_user.followers_count,
          time: notes.created_at,
          note_id: notes._id,
          isFollowed: notes.related_user.is_followed,
        };
        if (
          notes.notification_type === "Like" ||
          notes.notification_type === "Retweet" ||
          notes.notification_type === "Following Tweet"
        ) {
          if (notes.tweet !== null) {
            notification = {
              ...notification,
              tweetID: notes.tweet.id,
            };
          } else {
            notification = {
              ...notification,
              tweetID: "no",
            };
          }
        }
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

  return (
    <div className={classes.notes}>
      <NotificationsNavBar selected={true} notReadNotesNum={notReadNotes} />
      {/* <SingleNotification
        Person="YoussefMokhtar"
        type="Like"
        profilePicture="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ.jpg"
      /> */}
      {notifications.map((notification, index) => {
        if (index === notifications.length - 1) {
          let tid = `${index}`;
          if (notification.type === "Reply") {
            return (
              <div
                ref={lastNotificationElementRef}
                key={index}
                data-testid={`${index}`}
                className={`${classes.is_read} && ${!notification.is_read}`}
              >
                <SingleMentionNotification
                  {...notification}
                  showAction={true}
                />
              </div>
            );
          } else {
            return (
              <div
                ref={lastNotificationElementRef}
                key={index}
                data-testid={`${index}`}
              >
                <SingleNotification {...notification} showAction={true} />
              </div>
            );
          }
        } else {
          let tid = `${index}`;
          if (notification.type === "Reply") {
            return (
              <div data-testid={`${index}`}>
                <SingleMentionNotification
                  {...notification}
                  key={index}
                  showAction={true}
                />
              </div>
            );
          } else {
            return (
              <div data-testid={`${index}`}>
                <SingleNotification
                  {...notification}
                  key={index}
                  showAction={true}
                />
              </div>
            );
          }
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
export default AllNotifications;
