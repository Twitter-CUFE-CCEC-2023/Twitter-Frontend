import React from "react";
import "./WhatsHappening.css";
import WhatsHappeningItem from "./WhatsHappeningItem";

function WhatsHappening() {
  return (
    <div className="whatsHappening">
      <h2 className="whatsHappeningHeader">What's happening</h2>
      <WhatsHappeningItem />
      <WhatsHappeningItem />
      <WhatsHappeningItem />
      <p className="showMore">Show more</p>
    </div>
  );
}

export default WhatsHappening;
