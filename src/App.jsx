import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import SearchResults from './components/searchResults';

function App() {
  
  return (
    <>
      <div id="searchContainer">
        <SearchBar />
        <SearchResults/>
      </div>  
    </>
  )
}

export default App
