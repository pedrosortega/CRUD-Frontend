import React from "react";
import "./style/NavBarStyles.css";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
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
      <NavLink to="/signIn"> Sign In </NavLink>
      <NavLink to="/login"> Login </NavLink>
      <NavLink to="/log-out">Log Out</NavLink>
    </nav>
  );
};

export default NavBar;
