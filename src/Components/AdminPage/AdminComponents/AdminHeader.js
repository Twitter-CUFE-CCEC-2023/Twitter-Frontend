import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AdminStyles from "../AdminStyles";

const AdminHeader = (props) => {
  const classes = AdminStyles();
  let adminName;
  if (JSON.parse(localStorage.getItem("UserInfo"))) {
    adminName = JSON.parse(localStorage.getItem("UserInfo")).username;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ zIndex: 1201 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => {
              props.handleDrawerToggleFn();
            }}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome {adminName}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AdminHeader;
