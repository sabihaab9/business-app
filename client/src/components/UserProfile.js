import React, {useState, useEffect} from "react";
import '../App.css';
import BusinessList from "./BusinessList";


function UserProfile({user, businessList}){

    
    return(
        <div>
            <h1 style={{ color: "firebrick"}}>
                Welcome, {user.first_name} {user.last_name}!
            </h1>
            <BusinessList businessList={businessList} />
        </div>
    );
}

export default UserProfile;
