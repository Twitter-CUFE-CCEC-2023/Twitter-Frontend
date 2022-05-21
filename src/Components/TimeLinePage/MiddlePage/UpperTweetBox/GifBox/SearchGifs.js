import React from "react";
import classes from "./SearchGifs.module.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchGifs() {
  return (
    <div className={classes.searchBar}>
      <form className={classes.searchForm}>
        <input
          placeholder="Search Gifs"
          className={classes.searchInput}
        ></input>
        <SearchIcon className={classes.searchIcon} />
      </form>
    </div>
  );
}

export default SearchGifs;
