import React, { useEffect, useState } from "react"
import './App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
//import BusinessList from "./components/BusinessList";

function App() {
  const [user, setUser] = useState({});
  const [businessList, setBusinessList] = useState([]);


  useEffect(() => { 
    const getBusinesses = async () => {
        let req = await fetch("http://localhost:3000/businesses")
        let res = await req.json()
        // console.log(res)
        setBusinessList(res)
    }
    getBusinesses()
    console.log("business list: ")
    console.log(businessList)
  }, []);

  // console.log(businessList)

  function addToFavorites(){
    // alert(`saved ${business.name} to favorites!`)
    alert(`saved business to favorites!`)


    // fetch("http://localhost:3000/users", {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
    
  }

  //for users to check if they are logged in:

  //auto-login - if user is logged: 
  //if auth returns successfully, return with our user, and setCurrentUser = user
  //if our user has their id saved to sessions, then the response should return with that specific user
  //this will auto-login our user so long as we have their id saved to sessions

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  //to redirect the user if the user was not logged in: 
  //if currentUser is empty or not saved in sessions, we are going to direct our user to the login component. 
  if (!user) return <Login setUser={setUser} user={user} />
  
  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/search">
            <Home addToFavorites={addToFavorites} businessList={businessList} setBusinessList={setBusinessList} />
        </Route>
        <Route exact path="/login">
            <Login setUser={setUser} user={user} />
        </Route>
        <Route exact path="/signup">
            <SignUp setUser={setUser} user={user} />
        </Route>
        <Route exact path="/userprofile" component={UserProfile}>
            <UserProfile setUser={setUser} user={user} businessList={businessList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
