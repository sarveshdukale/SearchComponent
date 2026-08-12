import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import SearchResults from './components/searchResults';

function App() {
  const [search, setSearch] = useState(" ");
  return (
    <>
      <div id="searchContainer">
        <SearchBar search={search} setSearch={setSearch}/>
        <SearchResults search={search} />
      </div>  
    </>
  )
}

export default App
