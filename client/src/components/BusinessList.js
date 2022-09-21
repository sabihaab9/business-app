import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessList({businessList, addToFavorites, user}){





    return (
        <ul className="cards">
      {businessList.map((business) => {
        return (
          <BusinessCard
            key={business.id}
            business={business}
            addToFavorites={addToFavorites}
            user={user}
          />
        );
      })}
    </ul>
    )
}


export default BusinessList;