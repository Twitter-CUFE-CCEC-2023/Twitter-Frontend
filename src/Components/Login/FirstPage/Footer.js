import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <a className={classes.elements} href="https://about.twitter.com/en">
        About
      </a>{" "}
      <a className={classes.elements} href="https://help.twitter.com/en">
        Help Center
      </a>{" "}
      <a className={classes.elements} href="https://twitter.com/en/tos">
        Terms of Service
      </a>{" "}
      <a className={classes.elements} href="https://twitter.com/en/privacy">
        Privacy Policy
      </a>{" "}
      <a
        className={classes.elements}
        href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
      >
        Cookie Policy
      </a>{" "}
      <a
        className={classes.elements}
        href="https://help.twitter.com/en/resources/accessibility"
      >
        Accessibility
      </a>{" "}
      <a
        className={classes.elements}
        href="https://help.twitter.com/en/resources/accessibility"
      >
        Ads info
      </a>{" "}
      <a className={classes.elements} href="https://blog.twitter.com/">
        Blog
      </a>{" "}
      <a className={classes.elements} href="https://status.twitterstat.us/">
        Status
      </a>{" "}
      <a className={classes.elements} href="https://careers.twitter.com/">
        Careers
      </a>{" "}
      <a
        className={classes.elements}
        href="https://about.twitter.com/en/who-we-are/brand-toolkit"
      >
        Brand Resources
      </a>{" "}
      <a
        className={classes.elements}
        href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise"
      >
        Advertising
      </a>{" "}
      <a
        className={classes.elements}
        href="https://marketing.twitter.com/en_gb"
      >
        Marketing
      </a>{" "}
      <a
        className={classes.elements}
        href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
      >
        Twitter for Business
      </a>{" "}
      <a className={classes.elements} href="https://developer.twitter.com/en">
        Developers
      </a>{" "}
      <a
        className={classes.elements}
        href="https://twitter.com/i/directory/profiles"
      >
        Directory
      </a>{" "}
      <a
        className={classes.elements}
        href="https://twitter.com/settings/account/personalization"
      >
        Settings
      </a>{" "}
      <p className={classes.elements}>© 2022 Twitter, Inc.</p>
    </div>
  );
};

export default Footer;
