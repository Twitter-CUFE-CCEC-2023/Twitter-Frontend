import React, {
  useState,
  useEffect,
  // Fragment,
  useRef,
  useCallback,
} from "react";
import { useLocation } from "react-router-dom";
import classes from "./ProfileData.module.css";
import ProfileHeader from "./ProfileHeader";
import CoverPhoto from "./CoverPhoto";
import coverimage from "../../Assets/new-york-city.jpg";
import ProfileActions from "./ProfileActions/ProfileActions.js";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../Components/TimeLinePage/MiddlePage/FeedTweet";
import ReactLoading from "react-loading";
import axios from "axios";
import instance from "../axios";
import { useParams } from "react-router-dom";

function ProfileData() {
  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  });
  const pathlocation = useLocation();
  let userInPath = pathlocation.pathname.split("/")[2];
  const currentuser = JSON.parse(localStorage.getItem("UserInfo"));
  let currentuserName;
  if (currentuser) {
    currentuserName = currentuser.username;
  }
  // console.log("current user nameeeeeeeeeeeeeeeee", currentuserName);
  const location = useLocation();

  let { userName } = useParams();
  console.log(userName);

  const [tabType, setTabType] = useState("Tweets");
  const [isLoading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

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

  console.log(userName);

  const changeTypeHandeler = (type) => {
    setTabType(type);
  };

  useEffect(() => {
    getTweets();
  }, [pageNumber]);

  const getTweets = async () => {
    setLoading(true);

    const tweets = await instance
      .get(
        `/status/tweets/list/${userName}/${pageNumber}/3?include_replies=true`
      )
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
    const currentUser = await instance.get(`/info/${userName}`);
    console.log("userTweets", tweets);

    let userTweets = tweets.data.tweets;
    let currentUserTweets = currentUser.data.user;
    userTweets.forEach((APItweet) => {
      let tweet = {
        name: currentUserTweets.name, //user.name,
        profilePic: currentUserTweets.profile_image_url,
        userName: currentUserTweets.username,
        isVerified: currentUserTweets.isVerified,
        bio: currentUserTweets.bio,
        followers: currentUserTweets.followers_count,
        following: currentUserTweets.following_count,
        text: APItweet.content,
        tweetId: APItweet.id,
        date: APItweet.created_at,
        replies: APItweet.replies,
        likes: APItweet.likes_count,
        retweets: APItweet.retweets_count,
        quotes: APItweet.quotes_count,
        isLiked: APItweet.is_liked,
        isRetweeted: APItweet.is_retweeted,
        isReply: APItweet.is_reply,
      };
      setTweets((prevTweets) => {
        return [...prevTweets, tweet];
      });
    });
    setHasMore(userTweets.length === 3);
    setLoading(false);
    console.log(location.pathname);
  };

  return (
    <div className={`${classes.profileDataContainer} `}>
      <div className={`${classes.header} row`}>
        <ProfileHeader></ProfileHeader>
      </div>
      <div className={`${classes.coverPhoto}  row `}>
        <CoverPhoto coverImage={coverimage}></CoverPhoto>
        <div className={`${classes.profileImageContainer} `}>
          <img
            className={`${classes.profileImage} img-fluid`}
            src="https://pbs.twimg.com/profile_images/1492532221110104067/_3ozwoyh_400x400.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`${classes.profileActionsRow}  `}>
        <ProfileActions
          isMyProfile={currentuserName === userInPath ? true : false}
        ></ProfileActions>
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
        {/* FOR TWEETS */}
        {tweets.map((tweet, index) => {
          if (index === tweets.length - 1) {
            return (
              <div ref={lastTweetElementRef} key={index}>
                <FeedTweet {...tweet} showAction={true} />
              </div>
            );
          } else {
            return <FeedTweet {...tweet} key={index} showAction={true} />;
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
    </div>
  );
}

export default ProfileData;
