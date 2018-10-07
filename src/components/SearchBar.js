import React from 'react';

const SearchBar = (props) => {
  
  let inputText = '';
  const { onSearch } = props;

  function handleChange() {
    onSearch(inputText.value)
  }
  
  return(
    <div>
      <input type="text"
      ref ={input => inputText = input}
      />
      <button type="button" onClick={handleChange}>Search</button>
    </div>
  )
  
}
SearchBar.PropTypes = {
  onSearch: React.PropTypes.func.isRequired
}

export default SearchBar;