import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import AdminStyles from "../AdminStyles";

const AdminHeader = () => {
  const classes = AdminStyles();
  const adminName = JSON.parse(localStorage.getItem("UserInfo")).username;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ zIndex: 1201 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome {adminName}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AdminHeader;
