import React, { useState,useEffect, Fragment ,useRef, useCallback} from "react";
import { useLocation } from 'react-router-dom'
import classes from "./ProfileData.module.css";
import ProfileHeader from "./ProfileHeader";
import CoverPhoto from "./CoverPhoto";
import image from "../../Assets/new-york-city.jpg";
import ProfileActions from "./ProfileActions/ProfileActions.js";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../Components/TimeLinePage/MiddlePage/FeedTweet";
import ReactLoading from "react-loading";
import axios from "axios";

function ProfileData() {
  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  })
  const location = useLocation();
  const [tabType, setTabType] = useState("Tweets");
  const [isLoading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);

  const changeTypeHandeler = (type) => {
    setTabType(type);
  };
  
  useEffect(() => {
    getTweets();
  }, []);
  //get username from url
  const userID = location.pathname.split("/")[2];
  
  const getTweets=async()=>{
    setLoading(true);
    const tweets = await api.get(`users/${userID}/tweet`);
    const user= await api.get(`users/${userID}`);
    const userTweets = tweets.data;
    const username = user.data;
    console.log('userTweets',userTweets);
    userTweets.forEach((userTweet) => {
      let tweet = {
        userId : username.id,
        name : username.name,
        profilePic : username.profilePic,
        userName : username.userName,
        bio : username.bio,
        text : userTweet.content,
        tweetId : userTweet.id,
        date : userTweet.dateCreated,
        replies : userTweet.replies,
        likes : userTweet.likes,
        retweets : userTweet.retweets
      }
      setTweets((prevTweets) => {
        return [...prevTweets, tweet];
      });
    }); 
    setLoading(false);
    console.log(location.pathname);
  };




  
  return (
    <div className={`${classes.profileDataContainer} `}>
      <div className={`${classes.header} row`}>
        <ProfileHeader></ProfileHeader>
      </div>
      <div className={`${classes.coverPhoto}  row `}>
        <CoverPhoto coverImage={image}></CoverPhoto>
        <div className={`${classes.profileImageContainer} `}>
          <img
            className={`${classes.profileImage} img-fluid`}
            src="https://pbs.twimg.com/profile_images/1492532221110104067/_3ozwoyh_400x400.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`${classes.profileActionsRow}  `}>
        <ProfileActions isMyProfile={true}></ProfileActions>
      </div>
      <div className={`${classes.profileInfo} row  my-4 mx-1`}>
        <ProfileInfo
          username="عمرو أكا زيكا"
          userEmail="@Amr_Zaki2000"
          userBio="Al Ahly"
          birthMonth="October"
          birthDay={17}
          birthYear={2000}
        ></ProfileInfo>
      </div>
      <div className={`row`}>
        <ProfileTabs onChangeTab={changeTypeHandeler}></ProfileTabs>
      </div>
      <div>
      {!isLoading && tweets.map((tweet, index) => {
        return <FeedTweet {...tweet} key = {index} showAction={true} />;
        }
      )}
      {isLoading && <ReactLoading type={"spin"} color={"#1DA1F2"} height={'4%'} width={'4%'} className={`${classes.loadingIcon}`}  />}
  
      </div>
    </div>
  );
}

export default ProfileData;
