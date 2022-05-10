import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { LoginContext } from "../../../login-context";

import AdminStyles from "../AdminStyles";
import AdminHeader from "./AdminHeader";
import Tabs from "./AdminSideBarTabs";
// import classess from "./AdminSideBar.module.css";

function AdminSideBar(props) {
  const loginCtx = useContext(LoginContext);
  const { window } = props;
  const classes = AdminStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem(`filter-To-date`);
    localStorage.removeItem(`filter-From-date`);
    localStorage.removeItem(`filter-gender`);
    localStorage.removeItem(`filter-regions`);
    loginCtx.logout();
  };

  const drawer = (
    <div className={classes.drawerContainer}>
      <div className={classes.toolbar} />
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
                  <ListItemIcon style={{ minWidth: 0, marginRight: "15px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
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
          <div onClick={handleLogout}>
            {/* <div> */}
            <ListItem button key={"logout"}>
              <ListItemIcon style={{ minWidth: 0, marginRight: "15px" }}>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </div>
        </NavLink>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AdminHeader handleDrawerToggleFn={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

AdminSideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminSideBar;
