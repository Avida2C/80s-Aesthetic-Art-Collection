import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  return (
    <nav className="container-fluid navbar-container">
      <div className="navbar-content py-3" style={{backgroundColor:"transparent"}}>
        <Link to="/" className="nav-link" style={{ marginRight: "20px", color: "white", textDecoration: "none", backgroundColor: "none" }}>
        Gallery
      </Link>
      <Link to="/about" className="nav-link" style={{ color: "white", textDecoration: "none", backgroundColor: "none",}}>
        About
      </Link>
      </div>
      
    </nav>
  );
}
