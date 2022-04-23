import React from "react";
import classes from "./WhatsHappening.module.css";
import WhatsHappeningItem from "./WhatsHappeningItem";

function WhatsHappening() {
  return (
    <div className={classes.whatsHappening}>
      <h2 className={classes.whatsHappeningHeader}>What's happening</h2>
      <WhatsHappeningItem isTrending = {true} genre = "Music" topic = "Doja" tweets = {830000}/>
      <WhatsHappeningItem isLive = {true} genre = "Football" topic = "Ghana vs Nigeria" tag = "GhanaVsNaija" img ="https://pbs.twimg.com/semantic_core_img/1507063081976799237/Yz9jlEoe?format=jpg&name=240x240"/>
      <WhatsHappeningItem isLive = {false}/>
      <p className={classes.showMore}>Show more</p>
    </div>
  );
}

export default WhatsHappening;
