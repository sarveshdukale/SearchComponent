import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';

function SearchResults({search}) {
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

    const filteredUser = users.filter((user) => (
        user.username.toLowerCase().includes(search.toLowerCase())
    ))

    if (error) {
    return <h2>{error}</h2>;
    }
    
    if (loading) {
    return <h2>Loading...</h2>;
  }
    

  return (
      <>
          {loading?<h2>loading...</h2>:<div id="allUsers">
              
          </div>}
        

        
          <div id="searchResult">{
              filteredUser.map((user) => (
                  <p className="name" key={user.id}>{user.username}</p>
              ))}
          </div>

         
      </>
  )
}

export default SearchResults