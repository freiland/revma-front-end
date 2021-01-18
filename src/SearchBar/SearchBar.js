import SearchBar from 'material-ui-search-bar';
import React, { useState, useEffect } from 'react';

function test () {
  console.log('hello')
}

function Search () {
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    fetch("https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7043bd60e6msh017de187a06b311p16fbfejsn6f5cf5064028",
		"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
  }, [searchTerm]

  )
  
  return (
    <>
    <input value={searchTerm}></input>
    <button onClick={setSearchTerm}>Search</button>
    </>
  )
}
export default Search;