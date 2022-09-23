import React from "react";
import "../CardContainer.css"
function FavCard({favorite, user}){

    function handleDelete() {
        fetch(`http://localhost:3000/favorites/${favorite.id}/${user.id}`, {
            method: "DELETE"
        });
    }
    return(
        <div className="card-container">
            <img  className="img" src={favorite.image_url} alt={favorite.name} /> 
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <div  className= "button-container" onClick={() => handleDelete()}>Delete</div>
        </div>
    )
}


export default FavCard;