import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

function SearchBar() {
  return (
      <>
          <div id="seracBarContainer">
              <IoIosSearch />
              <input type="text" placeholder='Enter to Search...' />
          </div>
      </>
  )
}

export default SearchBar