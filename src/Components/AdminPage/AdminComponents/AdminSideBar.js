import React from "react";

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
  const screenSize = window.innerWidth;
  let largeScreen = true;

  if (screenSize < 800) {
    largeScreen = false;
  } else {
    largeScreen = true;
  }

  const classes = AdminStyles();

  const features = [
    {
      title: "Filters",
      icon: <EqualizerRoundedIcon />,
      url: "/admin/filter",
    },
    {
      title: "Users List",
      icon: <PeopleAltRoundedIcon />,
      url: "/admin/feature-userlist",
    },
    {
      title: "Likes",
      icon: <ThumbUpAltRoundedIcon />,
      url: "/admin/feature-likes",
    },
    {
      title: "Tweets",
      icon: <TwitterIcon />,
      url: "/admin/feature-tweets",
    },
    {
      title: "Retweets",
      icon: <LoopRoundedIcon />,
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
                  <ListItem
                    button
                    key={index}
                    onClick={props.handleChosenFeature[index]}
                  >
                    <ListItemIcon style={{ minWidth: 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {largeScreen && (
                      <ListItemText
                        style={{ marginLeft: "15px" }}
                        primary={item.title}
                      />
                    )}
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
