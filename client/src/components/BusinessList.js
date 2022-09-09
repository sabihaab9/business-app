import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessList({businesses}){


    return (
        <ul className="cards">
      {businesses.map((business) => {
        return (
          <BusinessCard
            key={business.id}
            business={business}
          />
        );
      })}
    </ul>
    )
}


export default BusinessList;