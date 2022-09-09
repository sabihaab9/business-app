import './App.css'
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
//import BusinessList from "./components/BusinessList";

function App() {
  const [user, setUser] = useState({});

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
      <Route path="/home">
          <Home />
      </Route>
      <Route exact path="/login">
          <Login setUser={setUser} user={user} />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
