import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import LoopRoundedIcon from "@material-ui/icons/LoopRounded";

import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import InsertChartRoundedIcon from "@material-ui/icons/InsertChartRounded";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Filters from "./Filters";
import UsersList from "./UsersList";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Admin = () => {
  const classes = useStyles();
  const adminName = "Millania";

  const [usersList, setUsersList] = useState(false);
  const [likes, setLikes] = useState(false);
  const [tweets, setTweets] = useState(false);
  const [retweets, setRetweets] = useState(false);

  const handleUsersList = () => {
    setUsersList(true);
    setLikes(false);
    setTweets(false);
    setRetweets(false);
  };
  const handleLikes = () => {
    setUsersList(false);
    setLikes(true);
    setTweets(false);
    setRetweets(false);
  };
  const handleTweets = () => {
    setUsersList(false);
    setLikes(false);
    setTweets(true);
    setRetweets(false);
  };
  const handleRetweets = () => {
    setUsersList(false);
    setLikes(false);
    setTweets(false);
    setRetweets(true);
  };

  const usersTable = "";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome {adminName}
          </Typography>
        </Toolbar>
      </AppBar>

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
            <ListItem button key="1" onClick={handleUsersList}>
              <ListItemIcon>
                <PeopleAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Users List" />
            </ListItem>
            <Divider />

            <ListItem button key="2" onClick={handleLikes}>
              <ListItemIcon>
                <ThumbUpAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Likes" />
            </ListItem>
            <Divider />

            <ListItem button key="3" onClick={handleTweets}>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary="Tweets" />
            </ListItem>
            <Divider />

            <ListItem button key="4" onClick={handleRetweets}>
              <ListItemIcon>
                <LoopRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Retweets" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        {/* <Filters /> */}

        {!usersList && !likes && !tweets && !retweets && (
          <h1>Please select something to display</h1>
        )}
        {usersList && <UsersList />}
        {likes && <h1>you clicked the likes</h1>}
        {tweets && <h1>you clicked the tweets</h1>}
        {retweets && <h1>you clicked the retweets</h1>}
      </main>
    </div>
  );
};

export default Admin;

/* 
<Divider />
<List>
{["All mail", "Trash", "Spam"].map((text, index) => (
    <ListItem button key={text}>
    <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
    </ListItem>
))}
</List> 
*/
