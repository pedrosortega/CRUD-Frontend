import React from "react";
import "./NavBarStyles.css";
import {NavLink} from "react-router";

const NavBar = () => {
  return ( <nav className="navbar">
  <NavLink id="home-button" to="/"> Home </NavLink>
  <NavLink to="/campuses"> Campuses </NavLink>
  <NavLink to="/students"> Students </NavLink>
  </nav>
  );
};

export default NavBar;
