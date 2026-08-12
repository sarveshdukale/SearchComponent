import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

function SearchBar({search,setSearch}) {
    
  return (
      <>
          <div id="seracBarContainer">
              <IoIosSearch id='icon'/>
              <input type="text" value={search} placeholder='Enter to Search...' onChange={(e) => {
                  setSearch(e.target.value)
              }} />
    
          </div>

          
      </>
  )
}

export default SearchBar