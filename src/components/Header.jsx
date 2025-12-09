import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      {/* Logo linking to Home */}
      <div className="logo">
        <a href="/">
          <img
            src="/assets/whatnew1.png"
            alt="Logo"
            className="header-logo-img"
          />
        </a>
      </div>

      {/* Navigation links */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a
          href="/become-seller"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Become A Seller
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
