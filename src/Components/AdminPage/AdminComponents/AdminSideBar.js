import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { LoginContext } from "../../../login-context";

import AdminStyles from "../AdminStyles";
import Tabs from "./AdminSideBarTabs";
import classess from "./AdminSideBar.module.css";

const AdminSideBar = () => {
  // const screenSize = window.innerWidth;
  // let largeScreen = true;

  // if (screenSize < 800) {
  //   largeScreen = false;
  // } else {
  //   largeScreen = true;
  // }

  // const styles = classess.sideBarText;

  // useEffect(()=>{
  //   const styles = classess.sideBarText;
  // }, [])

  const classes = AdminStyles();
  const loginCtx = useContext(LoginContext);

  const handleLogout = () => {
    loginCtx.logout();
  };

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
                      <ListItemIcon
                        style={{ minWidth: 0, marginRight: "15px" }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        // disableTypography
                        // className={classess.sideBarText}
                        // style={{ marginLeft: "15px" }}
                        classes={{ primary: classess.disable }}
                        primary={item.title}
                        // primaryTypographyProps={{ style: styles }}
                      />
                    </ListItem>
                  </NavLink>
                  <Divider />
                </div>
              );
            })}

            <NavLink
              to={`/`}
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.8)",
              }}
            >
              <p onClick={handleLogout}>
                <ListItem button key={"logout"}>
                  <ListItemIcon style={{ minWidth: 0, marginRight: "15px" }}>
                    <ExitToAppRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classess.disable }}
                    primary="Logout"
                  />
                </ListItem>
              </p>
            </NavLink>
            <Divider />
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default AdminSideBar;
