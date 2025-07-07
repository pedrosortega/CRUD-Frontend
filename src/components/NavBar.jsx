import React from "react";
import "./style/NavBarStyles.css";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink id="home-button" to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/campuses"> Campuses </NavLink>
      <NavLink to="/students"> Students </NavLink>
      <NavLink to="/log-out">Log Out</NavLink>
    </nav>
  );
};

export default NavBar;
