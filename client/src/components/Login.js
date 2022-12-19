import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import {NavLink} from "react-router-dom";

function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const history = useHistory()
  // console.log(history)

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(userData => {
              console.log("Logged in!");
              setError('');
              setUser(userData);
              // history.push("/userprofile");
              // navigate("/userprofile");
            });
        } else {
          console.log("failed to log in!");
          res.json()
            .then(({ error }) => setError(error));
        }
        //history.push(`/userprofile`);

      });


  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  if (user.id) {
    return (
      <div>
        {user.first_name} is logged in! Go to your profile
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <p style={{color: 'red'}}>{error ? error : null}</p>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" autoComplete="off" onChange={handleChangeUsername} value={username}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="current-password" onChange={handleChangePassword} value={password} />
        <button variant="fill" color="primary" type="submit"> {isLoading ? "Logged in!" : "Login"}</button>
      </form>
      {/* <h3>{ isLoading ? "is loading" : ''} </h3> */}
    </div>
  )
}



export default Login;