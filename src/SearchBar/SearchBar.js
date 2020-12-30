import SearchBar from 'material-ui-search-bar';
import React from 'react';

function Search() {
  
  doSomethingWith() {
    console.log(hi); 
   } 
    

    
  
return (
  <SearchBar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
  />
);
};

export default Search;