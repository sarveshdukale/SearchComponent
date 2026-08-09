import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  

  return (
    <>
      <div id="searchContainer">
        <SearchBar />
        <div>SearchResult</div>
      </div>  
    </>
  )
}

export default App
