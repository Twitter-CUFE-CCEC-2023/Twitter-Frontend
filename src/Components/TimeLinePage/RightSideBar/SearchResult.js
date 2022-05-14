import React from "react";
import classes from "./SearchResult.module.css";

function SearchResult(props) {
  return (
    <div className={classes.searchResult}>
      <div className="container my-1">
        <div className="row">
          <div className="col-2">
            <img
              className={classes.profilePic}
              alt="Profile Picture"
              src={props.profilePic}
            ></img>
          </div>
          <div className="col-10 my-2">
            <p className={`${classes.name} mb-0`}>
              <strong>{props.name}</strong>
            </p>
            <p className={classes.username}>@{props.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
