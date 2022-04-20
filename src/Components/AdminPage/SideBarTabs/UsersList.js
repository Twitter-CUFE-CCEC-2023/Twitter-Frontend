import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import UsersTable from "./UsersListComponents/UsersTable";

const UsersList = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <UsersTable />
      </main>
    </div>
  );
};

export default UsersList;
