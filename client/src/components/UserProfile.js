import React from "react";
import '../App.css'

function UserProfile({user, businessList}){

    const showSavedBusinesses = businessList?.filter(business => business.user_id)



    return(
        
        <div>
            <h1 style={{ color: "firebrick"}}>
                Welcome, {user.first_name} {user.last_name}!
            </h1>
        </div>
        
    );
}

export default UserProfile;
