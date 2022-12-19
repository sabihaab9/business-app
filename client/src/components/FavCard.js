import React from "react";
import "../CardContainer.css"
function FavCard({favorite, user, favoritesList, setFavoritesList}){

    //let newList = favoritesList.filter(...favoritesList)

    function handleDelete(e) {
        fetch(`http://localhost:3000/favorites/${favorite.id}/${user.id}`, {
            method: "DELETE"
        });
        // let newList = favoritesList.filter(())
        //the button's parent is the div that contains everything that we are trying to remove
        
        e.target.parentElement.remove()
    }

    

    




    return(
        <div className="card-container" >
            <img  className="img" src={favorite.image_url} alt={favorite.name} /> 
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <div  className= "button-container" onClick={handleDelete}>Delete</div>
        </div>
    )
}


export default FavCard;