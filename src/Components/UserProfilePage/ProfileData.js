import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useLocation } from "react-router-dom";
import classes from "./ProfileData.module.css";
import ProfileHeader from "./ProfileHeader";
import CoverPhoto from "./CoverPhoto";
import ProfileActions from "./ProfileActions/ProfileActions.js";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import ProfilePhotoModal from "./Modals/ProfilePhotoModal";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedTweet from "../../Components/TimeLinePage/MiddlePage/FeedTweet";
import ReactLoading from "react-loading";
import axios from "axios";
import instance from "../axios";
import { useParams } from "react-router-dom";

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
  }

  const [user, setUser] = useState({});
  const [tabType, setTabType] = useState("Tweets");
  const [isLoading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
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
        const tweets = await instance
          .get(`/status/tweets/list/${userName}/${pageNumber}/3`)
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
        currentUser = await instance.get(`/info/${userName}`);
        userTweets = tweets.data.tweets;
        currentUserTweets = currentUser.data.user;
      } else {
        const tweets = await axios.get(props.testUrl);
        userTweets = tweets.data.tweets;
      }


    }
    //get user tweets from mock api
    else {
      await fetch(
        `http://localhost:3000/usertweets/${userName}?_page=${pageNumber}&_limit=5`
      )
        .then((res) => res.json())
        .then((data) => {
          userTweets = data.tweets;
          console.log("userTweets", data);
        });

      await fetch(`http://localhost:3000/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          currentUserTweets = data;
        });
    }
    userTweets.forEach((APItweet) => {
      if (props.testUrl) {
        currentUserTweets = {
          username: "userName",
          name: "userName",
          isVerified: true,
          profileImage: "https://pbs.twimg.com/profile_images/1209858989998693888/zHXx-qQl_400x400.jpg",
          bio: "biooo",
          followers: 0,
          following: 0,
        }
      }
      let tweet = {
        name: currentUserTweets.name, //user.name,
        profilePic: currentUserTweets.profile_image_url,
        userName: currentUserTweets.username,
        isVerified: currentUserTweets.isVerified,
        bio: currentUserTweets.bio,
        followers_count: currentUserTweets.followers_count,
        following_count: currentUserTweets.following_count,
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
    setHasMore(userTweets.length === 3);
    setLoading(false);
  };



  //profile photo open handeling
  const [openProfilePhoto, setOpenProfilePhoto] = useState(false);
  const handleProfilePhotoOpenAndClose = () => {
    if (user.profilePic)
      setOpenProfilePhoto(() => { return !openProfilePhoto });
  }

  return (
    <div className={`${classes.profileDataContainer} `}>
      <ProfilePhotoModal isOpen={openProfilePhoto} handleProfilePhotoOpenAndClose={handleProfilePhotoOpenAndClose} profilePic={user.profilePic} />
      <div className={`${classes.header} row`}>
        <ProfileHeader profilePic={user.profilePic} name={user.name} username={user.username} tweets_count={user.tweets_count}></ProfileHeader>
      </div>
      <div className={`${classes.coverPhoto}  row `}>
        <CoverPhoto coverImage={user.coverimage ? user.coverimage : "https://jannaschreier.files.wordpress.com/2012/03/website-header-blue-grey-background.jpg"}></CoverPhoto>
        <div className={`${classes.profileImageContainer} `}>
          <img
            className={`${classes.profileImage} img-fluid`}
            onClick={handleProfilePhotoOpenAndClose}
            src={`${user.profilePic
                ? user.profilePic
                : "https://www.glidden.com/cms/getmedia/9500a596-cfc5-483d-8d53-28fff52a0444/room-swatch_smoke-grey__90bg-30_073.jpg"
              }`}
            alt=""
          />

        </div>
      </div>
      <div className={`${classes.profileActionsRow}  `}>
        <ProfileActions
          isFollowing={user.isFollowing}
          isMyProfile={currentuserName === userInPath ? true : false}
          setProfileData={handleProfileChange}
        ></ProfileActions>
      </div>
      <div className={`${classes.profileInfo} row  my-4 mx-1`}>
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
            return (
              <div data-testid={`${index}`}>
                {" "}
                <FeedTweet {...tweet} key={index} showAction={true} />{" "}
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
    </div>
  );
}

export default ProfileData;
