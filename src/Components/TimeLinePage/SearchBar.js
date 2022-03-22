import React from 'react'
import "./SearchBar.css"
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
  return (
    <div className='searchBar'>
        <form className='searchForm'>
            <input placeholder='Search Twitter' className='searchInput'></input>
            <SearchIcon className='searchIcon'/>
        </form>
    </div>
  )
}

export default SearchBar