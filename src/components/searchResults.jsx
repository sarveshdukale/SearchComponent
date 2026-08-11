import React, { useEffect, useState } from 'react'
import { use } from 'react';
import SearchBar from './SearchBar';

function SearchResults() {
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        
        async function getData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");


                if (!response.ok) {
                    throw new Error("Failed to fetch users..")
                }

                const data = await response.json();

                setUsers(data);

            }
        
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false)
            }
        }

        getData();
    },[])

    

  return (
      <>
          <div id="searchResult">{
              users.map((user) => (
                    <p className="name" key={user.id}>{user.username}</p>
              )).filter(user => user.username == SearchBar.search)}
          </div>

         {loading?<h2>loading...</h2>:<div id="allUsers">
              { 
                  
              }
          </div>}
      </>
  )
}

export default SearchResults