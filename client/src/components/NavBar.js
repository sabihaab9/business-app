import React from "react";
import { NavLink } from "react-router-dom";
import '../NavBar.css'

function NavBar({ user, setUser }) {

    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser({})
      }

    // function handleLogoutClick() {
    //   fetch("/logout", { method: "DELETE" }).then((r) => {
    //     if (r.ok) {
    //       setUser(null);
    //     }
    //   });
    // }
  
    return (
        <div className="nav-container">
            <div className="nav-inner">
                <NavLink style={{textDecoration: "none"}} exact to="/businesses">                   
                    <div className="nav-buttons">
                        <p>Search Businesses</p>
                    </div></NavLink>
                    <NavLink style={{textDecoration: "none"}} exact to="/login"> 

                    <div className="nav-buttons">
                        <p>Login</p>
                    </div>
                    </NavLink>
                    <NavLink style={{textDecoration: "none"}} exact to="/create">
                        <div className="nav-buttons">
                        <p>Create Account</p>
                        </div>
                    </NavLink>
                    <NavLink style={{textDecoration: "none"}} exact to="/about">
                        <div className="nav-buttons">
                        <p>About</p>
                        </div>
                    </NavLink>

                    <NavLink style={{textDecoration: "none"}} exact to="/userprofile">
                        <div className="nav-buttons">
                        <p>My Profile</p>
                        </div>
                    </NavLink>


            
            </div>
            <div className="logout-button" onClick={handleLogout}>Logout</div>
        </div>
    )
}

export default NavBar;