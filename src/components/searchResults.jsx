import React, { useEffect, useState } from 'react'


function SearchResults({search}) {
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        
        async function getData() {
            try {
                const response = await fetch("https://dummyjson.com/users?limit=500");


                if (!response.ok) {
                    throw new Error("Failed to fetch users..")
                }

                const data = await response.json();

                setUsers(data.users);

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

    if (filteredUser == "") {
        return <h2>No user Found...</h2>
    }

    if (error) {
    return <h2>{error}</h2>;
    }
    
    if (loading) {
    return <h2>Loading...</h2>;
    }
    
    
  return (
      <>
          {search == ""? "":<div id="searchResult">{
              filteredUser.map((user) => (
                  <p className="name" key={user.id}>{user.username}</p>
              ))}
          </div>}
      </>
  )
}

export default SearchResults