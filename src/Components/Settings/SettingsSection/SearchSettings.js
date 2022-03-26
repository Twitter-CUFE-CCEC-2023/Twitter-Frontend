import React from "react";
import classes from "./SearchSettings.module.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchSettings() {
  return (
    <div className={classes.searchBar}>
      <form className={classes.searchForm}>
        <input
          placeholder="Search settings"
          className={classes.searchInput}
        ></input>
        <SearchIcon className={classes.searchIcon} />
      </form>
    </div>
  );
}

export default SearchSettings;
