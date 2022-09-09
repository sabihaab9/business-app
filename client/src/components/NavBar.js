import React from "react";
import '../App.css'

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
        <div className="homepage">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="Login">Login</a>
                    </li>
                    <li>
                        <a href="About">About</a>
                    </li>
                    <li>
                        <a href="Search">Find Businesses in Your Neighborhood</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;