import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  return (
    <nav className="container-fluid nav-container ">
      <div className="container py-3" style={{backgroundColor:"transparent"}}>
        <Link to="/" style={{ marginRight: "20px", color: "white", textDecoration: "none", backgroundColor: "none" }}>
        Gallery
      </Link>
      <Link to="/evaluation" style={{ marginRight: "20px", color: "white", textDecoration: "none", backgroundColor: "none" }}>
        Evaluation
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none", backgroundColor: "none",}}>
        About
      </Link>
      </div>
      
    </nav>
  );
}
