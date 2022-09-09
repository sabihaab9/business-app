import React from "react";

function Search({ searchTerm, setSearchTerm, displayedBusinesses}) {

    const handleFilter = (value) => {
      setSearchTerm(value)
      displayedBusinesses()
    }

    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <i className="search icon" />
        </div>
      </div>
    );
  }
  
  export default Search;