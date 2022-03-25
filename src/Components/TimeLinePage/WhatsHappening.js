import React from "react";
import classes from "./WhatsHappening.module.css";
import WhatsHappeningItem from "./WhatsHappeningItem";

function WhatsHappening() {
  return (
    <div className={classes.whatsHappening}>
      <h2 className={classes.whatsHappeningHeader}>What's happening</h2>
      <WhatsHappeningItem />
      <WhatsHappeningItem />
      <WhatsHappeningItem />
      <p className={classes.showMore}>Show more</p>
    </div>
  );
}

export default WhatsHappening;
