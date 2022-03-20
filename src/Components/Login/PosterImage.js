import React from "react";
import classes from "./PosterImage.module.css";

const PosterImage = () => {
  return (
    <div className={classes.posterSection}>
      <div className={classes.poster}>
        <img
          className={classes.poster}
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="TwitterBackground"
        />
        <img
          className={classes.posterLogo}
          src="http://pngimg.com/uploads/twitter/twitter_PNG15.png"
          width="10%"
          alt="TwitterWhiteLogo"
        />
      </div>
    </div>
  );
};

export default PosterImage;
