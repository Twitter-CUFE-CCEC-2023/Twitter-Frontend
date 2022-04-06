import React from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AdminStyles from "../AdminStyles";
import Tabs from "./AdminSideBarTabs";

const AdminSideBar = () => {
  const screenSize = window.innerWidth;
  let largeScreen = true;

  if (screenSize < 800) {
    largeScreen = false;
  } else {
    largeScreen = true;
  }

  const classes = AdminStyles();

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
            {Tabs.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink
                    to={`${item.url}`}
                    style={{
                      textDecoration: "none",
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <ListItem button key={index}>
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
                  </NavLink>
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