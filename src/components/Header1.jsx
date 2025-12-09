import React, { useState } from "react";
import "./Header.css";

const Header1 = () => {
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
          href="/contact" // ✅ using anchor link
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile menu icon */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </header>
  );
};

export default Header1;
