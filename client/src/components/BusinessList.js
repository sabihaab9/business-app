import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessList({businessList, addToFavorites}){





    return (
        <ul className="cards">
      {businessList.map((business) => {
        return (
          <BusinessCard
            key={business.id}
            business={business}
            addToFavorites={addToFavorites}
          />
        );
      })}
    </ul>
    )
}


export default BusinessList;