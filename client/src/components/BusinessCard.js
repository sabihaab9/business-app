import React from "react";

function BusinessCard({business, addToFavorites}){

    function handleClick() {
        addToFavorites();
        // console.log(business)
    }
    return(
        <li className="card">
            <img src={business.image_url} alt={business.name} /> 
            <h3>{business.name}</h3>
            <p>{business.description}</p>
            <button onClick={handleClick}>save</button>
        </li>
    )
}


export default BusinessCard;