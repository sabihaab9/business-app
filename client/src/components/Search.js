import React from "react";
import "../Search.css"

function Search({ searchTerm, setSearchTerm, showBusinessList}) {

    const  handleFilter = (value) => {
      setSearchTerm(value)
      showBusinessList()
    }

    return (
      <div id="search-main-container">
        <div id="input-container">
          <input id="input" className="prompt" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
    );
  }
  
  export default Search;