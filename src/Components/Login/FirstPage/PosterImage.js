import React from "react";
import classes from "./PosterImage.module.css";

import backgroundImage from "../../../Assets/background.png";
import twitterWhiteLogo from "../../../Assets/twitterWhiteLogo.png";
import twitterWhiteLogoBlueBackground from "../../../Assets/twitterWhiteLogoBlueBackground.png";

const PosterImage = () => {
  return (
    <div className={classes.posterSection}>
      <img
        className={classes.smallScreenLogo}
        src={twitterWhiteLogoBlueBackground}
        alt="TwitterLogo"
      />
      <img
        className={classes.background}
        src={backgroundImage}
        alt="TwitterBackground"
      />
      <img
        className={classes.logo}
        src={twitterWhiteLogo}
        alt="TwitterWhiteLogo"
      />
    </div>
  );
};

export default PosterImage;
