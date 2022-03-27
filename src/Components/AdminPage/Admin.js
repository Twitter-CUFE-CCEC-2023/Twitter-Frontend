import React, { useEffect, useState } from "react";

import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "./AdminStyles";
import AdminHeader from "./CommunComponents/AdminHeader";
import AdminSideBar from "./CommunComponents/AdminSideBar";
import ChosenFeautre from "./CommunComponents/ChosenFeature";

const Admin = () => {
  const classes = AdminStyles();

  const [filters, setFilter] = useState(false);
  const [usersList, setUsersList] = useState(false);
  const [likes, setLikes] = useState(false);
  const [tweets, setTweets] = useState(false);
  const [retweets, setRetweets] = useState(false);

  const handleFeature = (filter, list, like, tweet, retweet) => {
    setFilter(filter);
    setUsersList(list);
    setLikes(like);
    setTweets(tweet);
    setRetweets(retweet);
  };

  useEffect(() => {}, [filters, usersList, likes, tweets, retweets]);

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar handleChosenFeature={handleFeature} />
      <main className={classes.content}>
        <Toolbar />
        <ChosenFeautre
          filter={filters}
          usersList={usersList}
          likes={likes}
          tweets={tweets}
          retweets={retweets}
        />
      </main>
    </div>
  );
};

export default Admin;
