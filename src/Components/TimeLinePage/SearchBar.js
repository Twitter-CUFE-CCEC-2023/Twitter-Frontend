import React from 'react'
import classes from "./SearchBar.module.css"
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
  return (
    <div className={classes.searchBar}>
        <form className={classes.searchForm}>
            <input placeholder='Search Twitter' className={classes.searchInput}></input>
            <SearchIcon className={classes.searchIcon}/>
        </form>
    </div>
  )
}

export default SearchBar