import React, {useState, useEffect} from "react";
import '../App.css';
import BusinessList from "./BusinessList";


function UserProfile({user, businessList}){

  const [myFavs, setMyFavs] = useState([])

  console.log(user.id)

    useEffect(() => {
      const getUser = async () => {
        let req = await fetch(`http://localhost:3000/users/${user.id}`)
        let res = await req.json()
        console.log(res)
        setMyFavs(res)
      }
      getUser();
      console.log(myFavs)
    },[])
    
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
