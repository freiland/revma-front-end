import SearchBar from 'material-ui-search-bar';
import React from 'react';
import { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';


function Search() {

const [searchTerm, setSearchTerm] = useState('')

console.log(searchTerm)

const cityInput = setSearchTerm 

useEffect(() => {
  fetch(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${searchTerm}`, {
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
  
}

)
  
return (
  <>
  <div className="search"></div>
  <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
  <button onClick = {setSearchTerm}>Search</button>
  </>
  
    
  //   onChange={(newValue) => this.setState({ value: newValue })}
  //   //onRequestSearch={() => doSomethingWith(this.state.value)}
  // />
);
};

export default Search;