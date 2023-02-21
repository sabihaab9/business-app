import React from "react";
import FavCard from "./FavCard"
//import BusinessCard from "./BusinessCard";


function FavList({favoritesList, user, setFavoritesList}){

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
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
          />
        );
      }): "you have no favorites:("}
    </div>
    )
}


export default FavList;