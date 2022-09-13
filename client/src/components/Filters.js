import React from "react";

    function Filters({ onChangeCategory, onFindBusinessClick}) {
        function handleChange(event) {
          onChangeCategory(event.target.value);

        }
      
        return (
          <div className="ui form">
            <h3>Filter by Category</h3>
            <div className="field">
              <select name="category" id="category" aria-label="category" onChange={handleChange}>
                <option value="all">All</option>
                <option value="home-goods">home goods</option>
                <option value="restaurant">restaurants</option>
              </select>
            </div>
      
            <div className="field">
              <button onClick={onFindBusinessClick} className="ui secondary button">
                Find Businesses
              </button>
            </div>
          </div>
        );
      }

      export default Filters;