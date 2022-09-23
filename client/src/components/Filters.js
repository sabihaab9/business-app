import React from "react";
import "../App.css"

    function Filters({ onChangeCategory, onFindBusinessClick}) {
        function handleChange(event) {
          onChangeCategory(event.target.value);

        }
      
        return (
          <div className="ui form">
            <h3>Filter by Category</h3>
            <div className="inner-container">
              <select className="select-container" name="category" id="category" aria-label="category" onChange={handleChange}>
                <option value="all">All</option>
                <option value="home-goods">home goods</option>
                <option value="restaurant">restaurants</option>
              </select>
            </div>
      
            <div className="field">
              <button onClick={onFindBusinessClick} id="find-button">
                <p id="button-text">Find Businesses</p>
              </button>
            </div>
          </div>
        );
      }

      export default Filters;