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
    name: "Retweets",
    AveragePerDay: 80,
    TotalNumber: 2000,
  },
];

const data_Pie = [
  { name: "Total Retweets", value: 80 },
  { name: "Avg Retweets", value: 2000 },
];

const Retweets = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Retweets</h1>
          <ShowHide dataPie={data_Pie} dataBar={data_Bar} />
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Retweets;
