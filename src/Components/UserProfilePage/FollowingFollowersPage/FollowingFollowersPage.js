import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./FollowingFollowersPage.module.css";
import LeftSideBar from "../../TimeLinePage/LeftSideBar/LeftSideBar";
import RightSideBar from "../../TimeLinePage/RightSideBar/RightSideBar";
import ProfileHeader from "../ProfileHeader";
import User from "./User";
import ReactLoading from "react-loading";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";
import axios from "axios";
import instance from "../../axios";
import { useParams } from "react-router-dom";
import { diceSix } from "fontawesome";

function FollowingFollowersPage() {
  const currentuser = JSON.parse(localStorage.getItem("UserInfo"));
  let currentuserName = currentuser.username;
  const pathlocation = useLocation();
  let type = pathlocation.pathname.split("/")[1];
  const [followersSelected, setFollowersSelected] = useState(
    type === "followers" ? true : false
  );
  const [followingSelected, setFollowingSelected] = useState(
    type === "following" ? true : false
  );
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageNumberFollowers, setPageNumberFollowers] = React.useState(0);
  const [pageNumberFollowing, setPageNumberFollowing] = React.useState(0);
  const [hasMoreFollowers, setHasMoreFollowers] = React.useState(true);
  const [hasMoreFollowing, setHasMoreFollowing] = React.useState(true);
  const location = useLocation();
  let { userName } = useParams();
  let isMock = localStorage.getItem("isMock") === "true";
  const observerFollowers = useRef();
  const observerFollowing = useRef();

  const lastTweetElementRefFollowers = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerFollowers.current) observerFollowers.current.disconnect();
      observerFollowers.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreFollowers) {
          setPageNumberFollowers(
            (prevPageNumberFollowers) => prevPageNumberFollowers + 1
          );
        }
      });
      if (node) observerFollowers.current.observe(node);
    },
    [isLoading, hasMoreFollowers]
  );

  const lastTweetElementRefFollowing = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerFollowing.current) observerFollowing.current.disconnect();
      observerFollowing.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreFollowing) {
          setPageNumberFollowing(
            (prevPageNumberFollowing) => prevPageNumberFollowing + 1
          );
        }
      });
      if (node) observerFollowing.current.observe(node);
    },
    [isLoading, hasMoreFollowing]
  );

  useEffect(() => {
    console.log(type,"page type")
    if (type === "followers") {
      setFollowers(()=>{return[]});
      if(pageNumberFollowers === 1){
        getUsers();
      }
      else
      setPageNumberFollowers(()=>{return 1});

    }
    if (type === "following") {
      setFollowing(()=>{return[]});
      if(pageNumberFollowing === 1){
       getUsers();
      }
      else
      setPageNumberFollowing(()=>{return 1});
    }
  }, [type]);

  useEffect(() => {
    console.log( "followersSelected")
    getUsers();
  }, [pageNumberFollowers, pageNumberFollowing]);

  const getUsers = async () => {
    setLoading(true);
    //get user info from database
    if (!isMock) {
      const res = await instance.get(`/info/${userName}`);

      const userInfo = res.data.user;
      setUser(userInfo);
    }
    //get user info from mock
    else {
    }
    if (type === "followers") {
      let userFollowers;
      if (!isMock) {
        console.log(pageNumberFollowers, "page number followers");
        const res = await instance
          .get(`/follower/list/${userName}/${pageNumberFollowers}/6`)
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          });
        userFollowers = res.data.followers;
      } else {
        await fetch(
          `http://localhost:3000/followerslist/${userName}?_page=${pageNumberFollowers}&_limit=6`
        )
          .then((res) => res.json())
          .then((data) => {
            userFollowers = data.followers;
          });
      }
      userFollowers.forEach((APIfollower) => {
        let follower = {
          name: APIfollower.name,
          profilePic: APIfollower.profile_image_url,
          userName: APIfollower.username,
          // isVerified: APIfollower.isVerified,
          bio: APIfollower.bio,
          followers: APIfollower.followers_count,
          following: APIfollower.following_count,
          isFollowing: APIfollower.is_followed,
        };
        setFollowers((prevFollowers) => {
          return [...prevFollowers, follower];
        });
      });
      setHasMoreFollowers(userFollowers.length === 6);
      setLoading(false);
    }
    if (type === "following") {
      let userFollowings;
      console.log(pageNumberFollowing, "page number following");
      if (!isMock) {
        const res = await instance
          .get(`/following/list/${userName}/${pageNumberFollowing}/6`)
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          });
        userFollowings = res.data.followings;
      } else {
        await fetch(
          `http://localhost:3000/followingslist/${userName}?_page=${pageNumberFollowers}&_limit=6`
        )
          .then((res) => res.json())
          .then((data) => {
            userFollowings = data.followings;
          });
      }
      userFollowings.forEach((APIfollowing) => {
        let followingUser = {
          name: APIfollowing.name,
          profilePic: APIfollowing.profile_image_url,
          userName: APIfollowing.username,
          // isVerified: APIfollower.isVerified,
          bio: APIfollowing.bio,
          followers: APIfollowing.followers_count,
          following: APIfollowing.following_count,
          isFollowing: APIfollowing.is_followed,
        };
        setFollowing((prevFollowing) => {
          return [...prevFollowing, followingUser];
        });
      });
      setHasMoreFollowing(userFollowings.length === 6);
      setLoading(false);
    }
  };

  const onClickFollowers = () => {
    setFollowersSelected(() => {
      return true;
    });
    setFollowingSelected(() => {
      return false;
    });
  };
  const onClickFollowing = () => {
    setFollowersSelected(() => {
      return false;
    });
    setFollowingSelected(() => {
      return true;
    });
  };

  return (
    <div className={classes.followingFollowersPage}>
      <LeftSideBar />
      <div className={classes.followingFollowersContainer}>
        <div className={`${classes.header} row`}>
          <ProfileHeader
            className={`${classes.infoHeader} `}
            name={user.name}
            username={user.username}
          ></ProfileHeader>

          <div className={`${classes.headerTabs}`}>
            <NavLink
              to={`/followers/${userName}`}
              className={`${
                followersSelected ? classes.selectedTab : classes.tab
              } col pb-0 text-muted btn `}
              onClick={onClickFollowers}
            >
              <div className={` align-self-center`}>
                <p className={`mb-2`}> Followers</p>{" "}
              </div>
              {followersSelected ? (
                <div className={`${classes.tabdiv} align-self-center`}></div>
              ) : (
                <div></div>
              )}
            </NavLink>
            <NavLink
              to={`/following/${userName}`}
              className={`${
                followingSelected ? classes.selectedTab : classes.tab
              } col pb-0 text-muted btn `}
              onClick={onClickFollowing}
            >
              <div className={` align-self-center`}>
                <p className={`mb-2`}> Following</p>{" "}
              </div>
              {followingSelected ? (
                <div className={`${classes.tabdiv} align-self-center`}></div>
              ) : (
                <div></div>
              )}
            </NavLink>
          </div>

          {/* add each user */}

          {type === "followers" &&
            followers.map((follower, index) => {
              if (index === followers.length - 1) {
                return (
                  <div ref={lastTweetElementRefFollowers} key={index}>
                    <User
                      {...follower}
                      showAction={true}
                      currentuser={
                        currentuserName === follower.userName ? true : false
                      }
                    ></User>{" "}
                  </div>
                );
              } else {
                return (
                  <div>
                    <User
                      {...follower}
                      key={index}
                      showAction={true}
                      currentuser={
                        currentuserName === follower.userName ? true : false
                      }
                    />
                  </div>
                );
              }
            })}
          {type === "followers" && followers.length === 0 && !isLoading && (
            <div>
              <div className={`row`}>
                <img
                  src="https://abs.twimg.com/sticky/illustrations/empty-states/yellow-birds-power-line-800x400.v1.png"
                  alt=""
                />
              </div>
              <div className={`${classes.noFollowersContainer}`}>
                <p className={`${classes.noFollowers} `}>
                  {" "}
                  Looking for followers?
                </p>
                <p className={`text-muted h6`}>
                  <small>
                    When someone follows this account, they’ll show up here.
                    Tweeting and interacting with others helps boost followers.
                  </small>
                </p>
              </div>
            </div>
          )}
          {type === "following" &&
            following &&
            following.map((followingUser, index) => {
              if (index === following.length - 1) {
                return (
                  <div ref={lastTweetElementRefFollowing} key={index}>
                    <User
                      {...followingUser}
                      currentuser={
                        currentuserName === followingUser.userName
                          ? true
                          : false
                      }
                      showAction={true}
                    ></User>{" "}
                  </div>
                );
              } else {
                return (
                  <div>
                    <User
                    
                      {...followingUser}
                      currentuser={
                        currentuserName === followingUser.userName
                          ? true
                          : false
                      }
                      key={index}
                      showAction={true}
                    />
                  </div>
                );
              }
            })}
          {type === "following" && following.length === 0 && !isLoading && (
            <div>
              <div className={`row`}>
                <img
                  src="https://abs.twimg.com/sticky/illustrations/empty-states/yellow-birds-power-line-800x400.v1.png"
                  alt=""
                />
              </div>
              <div className={`${classes.noFollowersContainer}`}>
                <p className={`${classes.noFollowers}  mb-0 `}>
                  {userName} isn’t{" "}
                </p>
                <p className={`${classes.noFollowers}  `}> following anyone</p>
                <p className={`text-muted h5`}>
                  <small>
                    Once they follow accounts, they’ll show up here.
                  </small>
                </p>
              </div>
            </div>
          )}
          {isLoading && (
            <ReactLoading
              type={"spin"}
              color={"#1DA1F2"}
              height={"8%"}
              width={"8%"}
              className={`${classes.loadingIcon}`}
            />
          )}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default FollowingFollowersPage;
