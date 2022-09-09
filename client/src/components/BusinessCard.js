import React from "react";

function BusinessCard({business}){



    return(
        <li className="card">
            <img src={business.image_url} alt={business.name} /> 
            <h3>{business.name}</h3>
            <p>{business.description}</p>
        </li>
    )
}


export default BusinessCard;