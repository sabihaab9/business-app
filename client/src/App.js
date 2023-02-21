import React, { useEffect, useState } from "react"
import './App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import ShowBusinesses from "./components/ShowBusinesses";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
import BusinessForm from "./components/BusinessForm";
import LandingPage from "./components/LandingPage";

function App() {
  const [user, setUser] = useState({});
  const [businessList, setBusinessList] = useState([]);

  console.log(user)


  useEffect(() => { 
    const getBusinesses = async () => {
        let req = await fetch("http://localhost:3000/businesses")
        let res = await req.json()
        // console.log(res)
        setBusinessList(res)
    }
    getBusinesses()
    // console.log("business list: ")
    // console.log(businessList)
  }, []);

  // console.log(businessList)

  function addToFavorites(favoriteItem){
    // alert(`saved ${business.name} to favorites!`)
    alert(`saved business to favorites!`)

    fetch("http://localhost:3000/favorites", {
      method: 'POST', // or 'PUT'
      accept: 'application/json',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favoriteItem),

    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function addBusinessToDirectory(business){

    alert(`Admin added business to business directory!`)

    //fetch("http://localhost:3000/businesslist"
    fetch("http://localhost:3000/create", {
      method: 'POST', // or 'PUT'
      accept: 'application/json',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(business),
    })
   
    setBusinessList([...businessList, business])

  }

  function deleteBusiness(business){

    alert(`Admin deleted business to business directory!`)

    //fetch("http://localhost:3000/businesslist"
    fetch(`http://localhost:3000/businesses/${business.id}`, {
      method: 'DELETE', // or 'PUT'
      accept: 'application/json',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(business),
    })
    setBusinessList([...businessList, business])
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data)});
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} user={user} />
  
  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/businesses">
            <ShowBusinesses deleteBusiness={deleteBusiness} addToFavorites={addToFavorites} businessList={businessList} setBusinessList={setBusinessList} user={user} />  
        </Route>
        <Route exact path="/login">
            <Login setUser={setUser} user={user} />
        </Route>
        <Route exact path="/signup">
            <SignUp setUser={setUser} user={user} />
        </Route>
        <Route path="/create">
            <BusinessForm addNewBusiness={addBusinessToDirectory} businessList={businessList} setBusinessList={setBusinessList} user={user} />  
        </Route>
        <Route exact path="/userprofile" component={UserProfile}>
            <UserProfile setUser={setUser} user={user} businessList={businessList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;