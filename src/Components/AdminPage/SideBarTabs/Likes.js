import React from "react";
import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import BackgroundPaper from "../BackgroundPaper";
import ShowHide from "./Charts/ShowHide";

import classess from "./CommunStyles.module.css";

const data_Bar = [
  {
    name: "Likes",
    AveragePerDay: 2400,
    TotalNumber: 5000,
  },
];

const data_Pie = [
  { name: "Total Likes", value: 2400 },
  { name: "Avg Likes", value: 5000 },
];

const Likes = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Likes</h1>
          <ShowHide dataPie={data_Pie} dataBar={data_Bar} />
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Likes;
