import React from "react";

function Search({ searchTerm, setSearchTerm, showBusinessList}) {

    const  handleFilter = (value) => {
      setSearchTerm(value)
      showBusinessList()
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