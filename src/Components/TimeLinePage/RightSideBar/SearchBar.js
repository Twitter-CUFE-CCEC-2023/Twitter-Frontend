import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "./SearchResult";
import instance from "../../axios";
import axios from "axios";
import ReactLoading from "react-loading";

function SearchBar() {
  /**
   * @module SearchBar
   */
  const [isLoading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [resultsStatus, setResultsStatus] = useState(0);

  /**
   * @name HandleIconClick
   * @function HandleIconClick
   * @description This function calls the GetSearchResults function to fetch the search results once you click on the search icon
   */
  const handleIconClick = () => {
    getSearchResults();
  };

  // useEffect(() => getSearchResults(), [searchItem]);

  /**
   * @name GetSearchResults
   * @function GetSearchResults
   * @description This function has the GET request that is responsible for receiving all the users search results that contain the given search item in the GET request.
   */
  const getSearchResults = async () => {
    setLoading(true);
    let results;
    let SearchResults;
    // console.log("fetching search results");
    results = await instance.get(`/search/${searchItem}`).catch((error) => {
      if (error.response) {
        setResultsStatus(404);
        setLoading(false);
      }
    });
    // console.log("results", results);
    SearchResults = results.data.users;
    console.log("searchResults", SearchResults);
    SearchResults.forEach((results) => {
      let searchResult = {
        profilePic: results.profile_image_url,
        name: results.name,
        username: results.username,
        is_verified: results.isVerified,
      };
      setSearchResults((prevSearchResults) => {
        return [...prevSearchResults, searchResult];
      });
    });
    setLoading(false);
    setResultsStatus(1);
  };

  function searchHandler(event) {
    setSearchResults([]);
    setSearchItem(event.target.value);
    setResultsStatus(0);
  }
  if (resultsStatus === 0) {
    return (
      <div>
        <div className={classes.searchBar}>
          <form className={classes.searchForm}>
            <input
              placeholder="Search Twitter"
              className={classes.searchInput}
              onChange={searchHandler}
            ></input>
            <SearchIcon
              className={classes.searchIcon}
              onClick={handleIconClick}
            />
          </form>
        </div>
        {isLoading && (
          <ReactLoading
            type={"spin"}
            color={"#1DA1F2"}
            height={"4%"}
            width={"4%"}
            className={`${classes.loadingIcon}`}
          />
        )}
      </div>
    );
  }
  if (resultsStatus === 404) {
    return (
      <div>
        <div className={classes.searchBar}>
          <form className={classes.searchForm}>
            <input
              placeholder="Search Twitter"
              className={classes.searchInput}
              onChange={searchHandler}
            ></input>
            <SearchIcon
              className={classes.searchIcon}
              onClick={handleIconClick}
            />
          </form>
        </div>
        <div>
          {!isLoading && (
            <div className="row mt-4">
              <div className="col-12">
                <p className={classes.noResults}>
                  Unfortunately, no results have been found
                </p>
              </div>
            </div>
          )}
        </div>
        {isLoading && (
          <ReactLoading
            type={"spin"}
            color={"#1DA1F2"}
            height={"4%"}
            width={"4%"}
            className={`${classes.loadingIcon}`}
          />
        )}
      </div>
    );
  } else if (resultsStatus === 1) {
    return (
      <div>
        <div className={classes.searchBar}>
          <form className={classes.searchForm}>
            <input
              placeholder="Search Twitter"
              className={classes.searchInput}
              onChange={searchHandler}
            ></input>
            <SearchIcon
              className={classes.searchIcon}
              onClick={handleIconClick}
            />
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
                  <SearchResult
                    {...searchResult}
                    key={index}
                    showAction={true}
                  />
                </div>
              );
            }
          })}
        </div>
        {isLoading && (
          <ReactLoading
            type={"spin"}
            color={"#1DA1F2"}
            height={"4%"}
            width={"4%"}
            className={`${classes.loadingIcon}`}
          />
        )}
      </div>
    );
  }
}
export default SearchBar;
