import React from "react";

import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "./AdminStyles";
import AdminSideBar from "./AdminComponents/AdminSideBar";
import Filters from "./Filters/Filters";

const Admin = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <Filters />
      </main>
    </div>
  );
};

export default Admin;
