import React from "react";
import BusinessCard from "./BusinessCard";
import "../App.css"

function BusinessList({businessList, addToFavorites, user, deleteBusiness}){





    return (
        <div id="main-container">
      {businessList.map((business) => {
        return (
          <BusinessCard
            key={business.id}
            business={business}
            addToFavorites={addToFavorites}
            deleteBusiness={deleteBusiness}
            user={user}
          />
        );
      })}
    </div>
    )
}


export default BusinessList;