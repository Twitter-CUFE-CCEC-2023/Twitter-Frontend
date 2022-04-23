import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import Chart from "./Chart";
import Paper from "@material-ui/core/Paper";

const Likes = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <h1>This is the Likes Page</h1>
        <Paper>
          <Chart />
        </Paper>
      </main>
    </div>
  );
};

export default Likes;
