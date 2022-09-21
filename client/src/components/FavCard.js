import React from "react";

function FavCard({favorite, user}){

    function handleDelete() {
        fetch(`http://localhost:3000/favorites/${favorite.id}/${user.id}`, {
            method: "DELETE"
        });
    }
    return(
        <li className="card">
            <img src={favorite.image_url} alt={favorite.name} /> 
            <h3>{favorite.name}</h3>
            <p>{favorite.description}</p>
            <button onClick={() => handleDelete()}>Delete</button>
        </li>
    )
}


export default FavCard;