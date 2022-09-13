import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessList({businessList}){


    return (
        <ul className="cards">
      {businessList.map((business) => {
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