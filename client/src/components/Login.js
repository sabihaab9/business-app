import React, { useState } from "react";
import UserProfile from "./UserProfile";
// import {NavLink } from "react-router-dom"
// import { useHistory } from 'react-router-dom';

function Login({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    var url = "/userprofile";
    window.location.href = url;
    // UserProfile(user.first_name, user.last_name)
    // return (
    //   <UserProfile first_name = {user.first_name} last_name = {user.last_name}/>
    // )
    // <NavLink to={{                            
    //   pathname:`/single-game/${games.slug}`,                            
    //  }}>             
    {/* navigation.navigate('/userprofile', {
      first_name: user.first_name,
      last_Name: user.last_name,
    }); */}
    // history.push("/userprofile", {
    //   first_name: user.first_name,
    // })
  }

  {/* // function getUserProfile() {
  // } */}
  return (
  <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        {/* <button onClick={this.handleClick}>hello</button> */}
      </form>
      {/* <Link to="/userprofile"></Link> */}
    {/* <h3>{ isLoading ? "is loading" : ''} </h3> */}
    {/* <UserProfile first_name = {user.first_name} last_name = {user.last_name}/> */}
    </div>
  )
}

export default Login;