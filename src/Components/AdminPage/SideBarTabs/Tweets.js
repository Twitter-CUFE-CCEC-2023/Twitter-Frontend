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
    name: "Tweets",
    AveragePerDay: 1398,
    TotalNumber: 3000,
  },
];

const data_Pie = [
  { name: "Total Tweets", value: 1398 },
  { name: "Avg Tweets", value: 3000 },
];

const Tweets = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Tweets</h1>
          <ShowHide dataPie={data_Pie} dataBar={data_Bar} />
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Tweets;
