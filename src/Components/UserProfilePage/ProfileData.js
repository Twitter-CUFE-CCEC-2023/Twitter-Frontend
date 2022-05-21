import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import classes from "./ProfileData.module.css";
import ProfileHeader from "./ProfileHeader";
import CoverPhoto from "./CoverPhoto";
import ProfileActions from "./ProfileActions/ProfileActions.js";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import ProfilePhotoModal from "./Modals/ProfilePhotoModal";
import CoverPhotoModal from "./Modals/CoverPhotoModal";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../Components/TimeLinePage/MiddlePage/FeedTweet";
import ReactLoading from "react-loading";
import axios from "axios";
import instance from "../axios";
import { useParams } from "react-router-dom";
import DefaultProfilePic from "../../Assets/DefaultProfilePic.jpg";

function ProfileData(props) {
  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  });
  const pathlocation = useLocation();
  let userInPath = pathlocation.pathname.split("/")[2];
  const currentuser = JSON.parse(localStorage.getItem("UserInfo"));
  let currentuserName = currentuser.username;
  const location = useLocation();
  let { userName } = useParams();

  useEffect(() => {}, []);

  if (currentuser) {
    currentuserName = currentuser.username;
  }

  const handleProfileChange = (currentUserTweets) => {
    setUser({
      name: currentUserTweets.name, //user.name,
      profilePic: currentUserTweets.profile_image_url,
      coverimage: currentUserTweets.cover_image_url,
      userName: currentUserTweets.username,
      email: currentUserTweets.email,
      isVerified: currentUserTweets.isVerified,
      bio: currentUserTweets.bio,
      location: currentUserTweets.location,
      birth_date: currentUserTweets.birth_date,
      created_at: currentUserTweets.created_at,
      website: currentUserTweets.website,
      followers_count: currentUserTweets.followers_count,
      following_count: currentUserTweets.following_count,
      tweets_count: currentUserTweets.tweets_count,
    });
  };

  const [user, setUser] = useState({});
  const [tabType, setTabType] = useState("Tweets");
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [loaded, setLoaded] = React.useState(null);
  let isMock = localStorage.getItem("isMock") === "true";
  let userTweets;
  const observer = useRef();
  const lastTweetElementRef = useCallback(
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

  const changeTypeHandeler = (type) => {
    setTabType(type);
  };

  useEffect(() => {
    getTweets();
  }, [pageNumber]);

  const getTweets = async () => {
    setLoading(true);

    let currentUserTweets;
    let currentUser;
    //get user tweets from api
    if (!isMock) {
      if (!props.testUrl) {
        currentUser = await instance.get(`/info/${userName}`);
        // userTweets = tweets.data.tweets;
        currentUserTweets = currentUser.data.user;
      } else {
        const tweets = await axios.get(props.testUrl);
        userTweets = tweets.data.tweets;
      }
    }

    console.log("currentUserTweets", currentUserTweets);
    setUser({
      name: currentUserTweets.name, //user.name,
      profilePic: currentUserTweets.profile_image_url,
      coverimage: currentUserTweets.cover_image_url,
      userName: currentUserTweets.username,
      email: currentUserTweets.email,
      isVerified: currentUserTweets.isVerified,
      bio: currentUserTweets.bio,
      location: currentUserTweets.location,
      birth_date: currentUserTweets.birth_date,
      created_at: currentUserTweets.created_at,
      website: currentUserTweets.website,
      followers_count: currentUserTweets.followers_count,
      following_count: currentUserTweets.following_count,
      tweets_count: currentUserTweets.tweets_count,
      isFollowing: currentUserTweets.is_followed,
    });
    // setHasMore(userTweets.length === 3);
    setLoading(false);
  };

  //profile photo open handeling
  const [openProfilePhoto, setOpenProfilePhoto] = useState(false);
  const handleProfilePhotoOpenAndClose = () => {
    if (user.profilePic)
      setOpenProfilePhoto(() => {
        return !openProfilePhoto;
      });
  };

  //cover photo open handeling
  const [openCoverPhoto, setOpenCoverPhoto] = useState(false);
  const handleClose = () => {
    console.log("openCoverPhoto", openCoverPhoto);
    setOpenCoverPhoto(() => {
      return false;
    });
  };
  const handleOpen = () => {
    setOpenCoverPhoto(() => {
      return true;
    });
  };
  return (
    <div className={`${classes.profileDataContainer} `}>
      <ProfilePhotoModal
        isOpen={openProfilePhoto}
        handleProfilePhotoOpenAndClose={handleProfilePhotoOpenAndClose}
        profilePic={user.profilePic}
      />
      <CoverPhotoModal
        isOpen={openCoverPhoto}
        handleClose={handleClose}
        coverPic={user.coverimage}
      />
      <div className={`${classes.header} row`}>
        <ProfileHeader
          profilePic={user.profilePic}
          name={user.name}
          username={user.username}
          tweets_count={user.tweets_count}
        ></ProfileHeader>
      </div>
      <div className={`${classes.coverPhoto}   `}>
        <CoverPhoto
          onClickHandler={handleOpen}
          coverImage={
            user.coverimage
              ? user.coverimage
              : "https://backlb.twittercloneteamone.tk/media/media-1653046788865.jpeg"
          }
        ></CoverPhoto>
        <div className={`${classes.profileImageContainer} `}>
          <img
            className={`${classes.profileImage} img-fluid`}
            onClick={handleProfilePhotoOpenAndClose}
            src={`${
              isLoading
                ? "https://www.glidden.com/cms/getmedia/9500a596-cfc5-483d-8d53-28fff52a0444/room-swatch_smoke-grey__90bg-30_073.jpg"
                : user.profilePic
                ? user.profilePic
                : DefaultProfilePic
            }`}
            alt=""
          />
        </div>
      </div>
      <div className={`${classes.profileActionsRow}  `}>
        {
          <ProfileActions
            isLoading={isLoading}
            isFollowing={user.isFollowing}
            username={user.userName}
            isMyProfile={currentuserName === userInPath ? true : false}
            setProfileData={handleProfileChange}
          ></ProfileActions>
        }
      </div>
      <div className={`${classes.profileInfo} row  mb-4 mx-1`}>
        <ProfileInfo
          name={user.name}
          userEmail={user.email}
          userBio={user.bio}
          userLocation={user.location}
          userWebsite={user.website}
          created_at={user.created_at}
          birth_date={user.birth_date}
          followers_count={user.followers_count}
          following_count={user.following_count}
        ></ProfileInfo>
      </div>

      <ProfileTabs
        onChangeTab={changeTypeHandeler}
        setPhotosActive={props.setPhotosActive}
        setIncrement={props.setIncrement}
        updateTweets={props.updateTweets}
        currentTweet={props.currentTweet}
      ></ProfileTabs>
    </div>
  );
}

export default ProfileData;
