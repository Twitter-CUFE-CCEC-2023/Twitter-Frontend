import React from "react";
import classes from "./SearchResult.module.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { NavLink } from "react-router-dom";

function SearchResult(props) {
  let profilePicture;
  if (props.profilePic === "") {
    profilePicture =
      "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
  } else {
    profilePicture = props.profilePic;
  }
  return (
    <div className={classes.searchResult}>
      <NavLink to={`/userProfile/${props.username}`} className={classes.link}>
        <div className="container my-1">
          <div className="row">
            <div className="col-2">
              <img
                className={classes.profilePic}
                alt="Profile Picture"
                src={profilePicture}
              ></img>
            </div>
            <div className="col-10 my-2">
              <p className={`${classes.name} mb-0`}>
                <strong>{props.name} </strong>
                {props.is_verified && (
                  <CheckCircleIcon className={classes.verifiedIcon} />
                )}
              </p>
              <p className={classes.username}>@{props.username}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default SearchResult;
