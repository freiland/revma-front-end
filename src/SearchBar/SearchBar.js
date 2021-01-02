import SearchBar from 'material-ui-search-bar';
import React from 'react';
import { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';


function Search() {

const [searchTerm, setSearchTerm] = useState('')

console.log(searchTerm)

const cityInput = setSearchTerm 

useEffect(() => {
  
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