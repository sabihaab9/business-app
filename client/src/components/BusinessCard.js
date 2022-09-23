import React from "react";
import "../CardContainer.css"

function BusinessCard({business, addToFavorites, user, deleteBusiness}){

    const handleClick = () => {
        const favoriteItem = {
            business_id: business.id,
            user_id: user.id
        }
        addToFavorites(favoriteItem);
        // console.log(business)
    }


    return(
        <div className="card-container">
            <img className="img" src={business.image_url} alt={business.name} /> 
            <h3>{business.name}</h3>
            <p>{business.description}</p>
            <div className="button-container" onClick={handleClick}>Save</div>
            { user.isAdmin ? null : <div className="button-container" onClick={() => deleteBusiness(business)}> Delete </div> }
        </div>
    )
}


export default BusinessCard;