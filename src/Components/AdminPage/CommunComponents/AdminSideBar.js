import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import LoopRoundedIcon from "@material-ui/icons/LoopRounded";

import AdminStyles from "../AdminStyles";

const AdminSideBar = (props) => {
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
    props.handleChosenFeature(filters, usersList, likes, tweets, retweets);
  };
  const handleUsersList = () => {
    setFilters(false);
    setUsersList(true);
    setLikes(false);
    setTweets(false);
    setRetweets(false);
    props.handleChosenFeature(filters, usersList, likes, tweets, retweets);
  };
  const handleLikes = () => {
    setFilters(false);
    setUsersList(false);
    setLikes(true);
    setTweets(false);
    setRetweets(false);
    props.handleChosenFeature(filters, usersList, likes, tweets, retweets);
  };
  const handleTweets = () => {
    setFilters(false);
    setUsersList(false);
    setLikes(false);
    setTweets(true);
    setRetweets(false);
    props.handleChosenFeature(filters, usersList, likes, tweets, retweets);
  };
  const handleRetweets = () => {
    setFilters(false);
    setUsersList(false);
    setLikes(false);
    setTweets(false);
    setRetweets(true);
    props.handleChosenFeature(filters, usersList, likes, tweets, retweets);
  };

  const features = [
    {
      title: "Filters",
      icon: <EqualizerRoundedIcon />,
      onClick: handleFilters,
      url: "/admin/filter",
    },
    {
      title: "Users List",
      icon: <PeopleAltRoundedIcon />,
      onClick: handleUsersList,
      url: "/admin/feature-userlist",
    },
    {
      title: "Likes",
      icon: <ThumbUpAltRoundedIcon />,
      onClick: handleLikes,
      url: "/admin/feature-likes",
    },
    {
      title: "Tweets",
      icon: <TwitterIcon />,
      onClick: handleTweets,
      url: "/admin/feature-tweets",
    },
    {
      title: "Retweets",
      icon: <LoopRoundedIcon />,
      onClick: handleRetweets,
      url: "/admin/feature-retweets",
    },
  ];

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {features.map((item, index) => {
              return (
                <div key={index}>
                  <ListItem button key={index} onClick={item.onClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default AdminSideBar;
