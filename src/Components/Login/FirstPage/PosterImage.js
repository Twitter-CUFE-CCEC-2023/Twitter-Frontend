import React from "react";
import classes from "./PosterImage.module.css";

import backgroundImage from "../../../Assets/background.png";
import twitterWhiteLogo from "../../../Assets/twitterWhiteLogo.png";
// import twitterWhiteLogoBlueBackground from "../../../Assets/twitterWhiteLogoBlueBackground.png";

const PosterImage = () => {
  return (
    <div className={classes.posterSection}>
      <img
        className={classes.background}
        src={backgroundImage}
        alt="TwitterBackground"
      />
      <div className={classes.logoContainer}>
        <img
          className={classes.logo}
          src={twitterWhiteLogo}
          alt="TwitterWhiteLogo"
        />
      </div>
    </div>
  );
};

export default PosterImage;
