import React from "react";
import Toolbar from "@material-ui/core/Toolbar";

import AdminStyles from "../AdminStyles";
import AdminHeader from "../AdminComponents/AdminHeader";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import BackgroundPaper from "../BackgroundPaper";
import CustomBarChart from "./Charts/CustomBarChart";
import CustomPieChart from "./Charts/CustomPieChart";
import ShowHide from "./Charts/ShowHide";

import classess from "./CommunStyles.module.css";

const data_Bar = [
  {
    name: "Likes",
    AveragePerDay: 2400,
    TotalNumber: 5000,
  },
  {
    name: "Tweets",
    AveragePerDay: 1398,
    TotalNumber: 3000,
  },
  {
    name: "Retweets",
    AveragePerDay: 8,
    TotalNumber: 2000,
  },
];

const data_Pie = [
  { name: "Avg Likes", value: 2400 },
  { name: "Avg Tweets", value: 1398 },
  { name: "Avg Retweets", value: 500 },
  { name: "Total Likes", value: 5000 },
  { name: "Total Tweets", value: 3000 },
  { name: "Total Retweets", value: 2000 },
];

const data_Pie2 = [
  { name: "Total Likes", value: 5000 },
  { name: "Total Tweets", value: 3000 },
  { name: "Total Retweets", value: 2000 },
];

const Statistics = () => {
  const classes = AdminStyles();

  return (
    <div className={classes.root}>
      <AdminHeader />
      <AdminSideBar />
      <main className={classes.content}>
        <Toolbar />
        <BackgroundPaper>
          <h1 className={classess.header}>Statistics</h1>
          {/* <CustomBarChart data={data} /> */}
          {/* <CustomPieChart data={data_Pie} /> */}
          {/* <CustomPieChart data={data_Pie2} /> */}
          <ShowHide dataPie={data_Pie} dataBar={data_Bar} />
        </BackgroundPaper>
      </main>
    </div>
  );
};

export default Statistics;
