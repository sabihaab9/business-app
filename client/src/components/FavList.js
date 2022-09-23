import React from "react";
import FavCard from "./FavCard"
//import BusinessCard from "./BusinessCard";


function FavList({favoritesList, user}){

// console.log("favorites list in myFavList: ")

// console.log(favoritesList)

// let favorites = [...favoritesList.businesses]

// console.log(favorites)


    return (
        <div id="main-container">
      {favoritesList.length !==0 ? favoritesList.map((favorite) => {
        console.log(favorite)
        return (
          <FavCard
            key={favorite.id}
            favorite={favorite}
            user={user}
          />
        );
      }): "you have no favorites:("}
    </div>
    )
}


export default FavList;