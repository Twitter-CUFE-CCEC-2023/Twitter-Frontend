import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./AllNotifications.module.css";
import NotificationsNavBar from "../NotificationsNavBar";
import SingleNotification from "./SingleNotification";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import instance from "../../axios";
import ReactLoading from "react-loading";

function AllNotifications() {
  const [isLoading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
  console.log("currentUser", currentUser);

  useEffect(() => getNotifications(), [pageNumber]);

  const getNotifications = async () => {
    setLoading(true);
    const notes = await instance.get(`/notifications/list/${pageNumber}/5`);
    const userNotifications = notes.data.notifications;
    console.log("userNotifications", userNotifications);
    userNotifications.forEach((notes) => {
      let notification = {
        Person: notes.related_user.name,
        personID: notes.related_user.username,
        type: notes.notification_type,
        profilePicture: notes.related_user.profile_image_url,
        //tweetID: notes.tweet.id,
        uid: currentUser.username,
      };
      if (
        notes.notification_type === "Like" ||
        notes.notification_type === "Retweet" ||
        notes.notification_type === "Following Tweet"
      ) {
        notification = {
          ...notification,
          tweetID: notes.tweet.id,
        };
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
      <NotificationsNavBar selected={true} />
      {/* <SingleNotification
        Person="YoussefMokhtar"
        type="Like"
        profilePicture="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ.jpg"
      /> */}
      {notifications.map((notification, index) => {
        if (index === notifications.length - 1) {
          return (
            <div ref={lastNotificationElementRef} key={index}>
              <SingleNotification {...notification} showAction={true} />
            </div>
          );
        } else {
          return (
            <SingleNotification
              {...notification}
              key={index}
              showAction={true}
            />
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
export default AllNotifications;
