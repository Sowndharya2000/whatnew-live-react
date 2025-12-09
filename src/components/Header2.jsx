import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <a href="/" onClick={closeMenu}>
          <img src="/assets/whatnew1.png" alt="Logo" className="header-logo-img" />
        </a>
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="/working-whatnew" className="nav-link" onClick={closeMenu}>
          Working & WhatNew
        </a>

        <a href="/discovery-jobs" className="nav-link" onClick={closeMenu}>
          Discovery & Jobs
        </a>
      </nav>

      {/* Mobile menu icon */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </header>
  );
};

export default Header;
