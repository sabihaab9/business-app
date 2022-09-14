import React from "react";
import '../App.css'

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
        <div className="homepage">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/search">Search Businesses</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signup">Create Account</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;