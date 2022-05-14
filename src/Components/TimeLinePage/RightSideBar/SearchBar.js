import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "./SearchResult";
import instance from "../../axios";
import axios from "axios";

function SearchBar() {
  const [isLoading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("UserInfo"));

  useEffect(() => getSearchResults(), [searchItem]);

  const getSearchResults = async () => {
    setLoading(true);
    let results;
    let SearchResults;
    results = await instance.get(`/search/${searchItem}`);
    SearchResults = results.data.users;
    console.log("searchResults", SearchResults);
    SearchResults.forEach((results) => {
      console.log("results", results);
      let searchResult = {
        profilePic: results.profile_image_url,
        name: results.name,
        username: results.username,
      };
      setSearchResults((prevSearchResults) => {
        return [...prevSearchResults, searchResult];
      });
    });
    setLoading(false);
  };

  function searchHandler(event) {
    setSearchItem(event.target.value);
  }
  if (searchItem === "") {
    return (
      <div className={classes.searchBar}>
        <form className={classes.searchForm}>
          <input
            placeholder="Search Twitter"
            className={classes.searchInput}
            onChange={searchHandler}
          ></input>
          <SearchIcon className={classes.searchIcon} />
        </form>
      </div>
    );
  }
  return (
    <div>
      <div className={classes.searchBar}>
        <form className={classes.searchForm}>
          <input
            placeholder="Search Twitter"
            className={classes.searchInput}
            onChange={searchHandler}
          ></input>
          <SearchIcon className={classes.searchIcon} />
        </form>
      </div>
      <div className={classes.searchResultsList}>
        {searchResults.map((searchResult, index) => {
          if (index === searchResults.length - 1) {
            let tid = `${index}`;
            return (
              <div key={index} data-testid={`${index}`}>
                <SearchResult {...searchResult} showAction={true} />
              </div>
            );
          } else {
            let tid = `${index}`;
            return (
              <div data-testid={`${index}`}>
                <SearchResult {...searchResult} key={index} showAction={true} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default SearchBar;
