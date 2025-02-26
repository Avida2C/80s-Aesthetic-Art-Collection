import React from "react";
import { Link } from "react-router-dom"; // Only import Link

export default function Navbar() {
  return (
    <nav className="nav-container py-3">
      <Link to="/" style={{ marginRight: "20px", color: "white", textDecoration: "none", backgroundColor: "none" }}>
        Gallery
      </Link>
      <Link to="/evaluation" style={{ marginRight: "20px", color: "white", textDecoration: "none", backgroundColor: "none" }}>
        Evaluation
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none", backgroundColor: "none" }}>
        About
      </Link>
    </nav>
  );
}
