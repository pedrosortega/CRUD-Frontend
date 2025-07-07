import React from "react";
import "./style/NavBarStyles.css";
import { NavLink, useNavigate } from "react-router";

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://localhost:3000/auth/logout",
        {},
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      Navigate("/signIn");
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <nav className="navbar">
      <NavLink id="home-button" to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/campuses"> Campuses </NavLink>
      <NavLink to="/students"> Students </NavLink>
      <div className="auth">
        {!isAuthenticated ? (
          <>
            <NavLink to="/signIn"> Sign Up </NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        ) : (
          <NavLink to="/log-out" onClick={handleLogout}>
            Log Out
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
