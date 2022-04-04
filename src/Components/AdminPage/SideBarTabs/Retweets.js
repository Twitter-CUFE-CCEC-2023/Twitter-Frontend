import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";

const Retweets = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <h1>This is the Retweets Page</h1>
      </main>
    </div>
  );
};

export default Retweets;
