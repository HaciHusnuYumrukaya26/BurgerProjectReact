import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <div className="navbar">
    <div className="leftSide">
    <img src="https://raw.githubusercontent.com/fdnakn/reactRestaurantWebsite/master/src/assets/hamburgerlogo.png" alt="logo"/>
    </div>
    <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
 
  </div>;
};

export default Navbar;
