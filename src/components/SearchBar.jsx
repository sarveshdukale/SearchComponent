import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

function SearchBar() {
    const [search , setSearch] = useState(" ")
  return (
      <>
          <div id="seracBarContainer">
              <IoIosSearch id='icon'/>
              <input type="text" value={search} placeholder='Enter to Search...' onChange={(e) => {
                  setSearch(e.target.value)
              }} />
              
              {console.log(search)
              }
          </div>

          
      </>
  )
}

export default SearchBar