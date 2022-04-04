import React, { useState } from "react";

import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "./AdminStyles";
import AdminHeader from "./AdminComponents/AdminHeader";
import AdminSideBar from "./AdminComponents/AdminSideBar";
import ChosenFeautre from "./AdminComponents/ChosenFeature";

const Admin = () => {
  const classes = AdminStyles();

  const [filters, setFilters] = useState(true);
  const [usersList, setUsersList] = useState(false);
  const [likes, setLikes] = useState(false);
  const [tweets, setTweets] = useState(false);
  const [retweets, setRetweets] = useState(false);

  const handleFilters = () => {
    setFilters(true);
    setUsersList(false);
    setLikes(false);
    setTweets(false);
    setRetweets(false);
  };
  const handleUsersList = () => {
    setFilters(false);
    setUsersList(true);
    setLikes(false);
    setTweets(false);
    setRetweets(false);
  };
  const handleLikes = () => {
    setFilters(false);
    setUsersList(false);
    setLikes(true);
    setTweets(false);
    setRetweets(false);
  };
  const handleTweets = () => {
    setFilters(false);
    setUsersList(false);
    setLikes(false);
    setTweets(true);
    setRetweets(false);
  };
  const handleRetweets = () => {
    setFilters(false);
    setUsersList(false);
    setLikes(false);
    setTweets(false);
    setRetweets(true);
  };

  const handleFeature = [
    handleFilters,
    handleUsersList,
    handleLikes,
    handleTweets,
    handleRetweets,
  ];

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
