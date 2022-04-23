import React, {useRef, useCallback} from "react";
import classes from "./Feed.module.css";
import FeedTweetBox from "./UpperTweetBox/FeedTweetBox";
import FeedTweet from "./FeedTweet";
import defaultMaleProfile from "../../../Assets/defaultMaleProfile.jpg";
import axios from "axios";
import { ContactlessOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Feed() {

  const api = axios.create({
    baseURL: "https://6262975a005a66e1e3aa1ebb.mockapi.io/",
  })
  
  // let feedTweets;
  // async function getTweets() {
    //   const res = await api.get("users/1/tweet");
    //   setTweets(res.data);
    //   feedTweets = tweets.map((tweet) => {
      //     return <FeedTweet {...tweet} showAction={true} />;
      //   });
      // }
      // React.useEffect(() => {
        //   getTweets();
        // }, []);
        
  const [users, setUsers] = React.useState([]);
  const [tweets, setTweets] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const observer = useRef();

  const lastTweetElementRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);

  let feedTweets;
  React.useEffect(() => getTweets(), [pageNumber]);
  
  const getTweets = async () => {
    setLoading(true);
    const res = await api.get(`users?page=${pageNumber}&limit=3`);
    setHasMore(res.data.length > 0);
    users.push(res.data);

    for(const user of users[0]) {
      const resp = await api.get(`users/${user.id}/tweet`);
      const userTweets = resp.data;
      userTweets.forEach((userTweet) => {
        let tweet = {
          userId : user.id,
          name : user.name,
          profilePic : user.profilePic,
          userName : user.userName,
          bio : user.bio,
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
    }
      
    feedTweets = tweets.map((tweet) => {
      return <FeedTweet {...tweet} showAction={true} />;
    });
    setLoading(false);
  }
    
  
  

   
  // if(isLoading) {
  //   return (
  //   <div className={classes.feed}>
  //     <h2 className={classes.feedHeader}>Home</h2>
  //     <FeedTweetBox />
  //     <div className="App">Loading...</div>
  //   </div>);
    
  // }

  

  return (
    <div className={classes.feed}>
      <h2 className={classes.feedHeader}>Home</h2>
      <FeedTweetBox />
      {tweets.map((tweet, index) => {
        if(index === tweets.length - 1) {
          return <div ref ={lastTweetElementRef} key = {index}>
                  <FeedTweet  {...tweet} showAction={true} />
                </div>
        } else {
        return <FeedTweet {...tweet} key = {index} showAction={true} />;
        }
    })}
      {isLoading && <div className="App">Loading...</div>}
    </div>
  );
}
