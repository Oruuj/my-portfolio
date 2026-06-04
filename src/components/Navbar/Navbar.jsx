import React from "react";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <a href="#hero-container">Home</a>
        <a href="#skills-section">Skills</a>
        <a href="#contact">Mail to me</a>
      </div>
    </div>
  );
};
