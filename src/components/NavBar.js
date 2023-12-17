//NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/" className="navLink">Home</Link>
      <Link to="/about" className="navLink">About Us</Link>
      <Link to="/contact" className="navLink">Contact Us</Link>
      <Link to="/feedback" className="navLink">Reviews</Link>
    </nav>
  );
}

export default NavBar;