import React, {useState, useEffect} from "react";
import '../App.css';
import BusinessList from "./BusinessList";
import FavList from "./FavList";

function UserProfile({user, businessList}){

  const [myFavs, setMyFavs] = useState([])

  // console.log("user-id is ")
  console.log(user.id,"id")

    useEffect(() => {
      if(user.id){
        fetch(`http://localhost:3000/users/${user.id}`)
          .then((r) => r.json())
          .then((data) => {
            setMyFavs(data.businesses);
          });
      }
    }, [user]);

    //console.log("user's info: ", myFavs)

    return(
        <div>
            <h1 style={{ color: "firebrick"}}>
                Welcome,{user.first_name} {user.last_name}!
            </h1>
            <FavList favoritesList={myFavs} user={user} />
            
        </div>
    );
}

export default UserProfile;
