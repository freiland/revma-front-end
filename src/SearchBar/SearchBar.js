import SearchBar from 'material-ui-search-bar';
import React from 'react';
import { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';


function Search() {

[searchTerm, setSearchTerm] = useState('')
  
return (
  <>
  <div className="search"></div>
  <input type='text' defaultValue=''/>
  <button onClick = {setSearchTerm}>Search</button>
  </>
  
    
  //   onChange={(newValue) => this.setState({ value: newValue })}
  //   //onRequestSearch={() => doSomethingWith(this.state.value)}
  // />
);
};

export default Search;