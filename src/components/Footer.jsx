import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        {/* 1️⃣ Logo Section */}
        <div className="footer-logo-section">
          <a href="/">
            <img
              src="/assets/whatnew1.png"
              alt="WhatNew Logo"
              className="footer-logo-img"
            />
          </a>
        </div>

        {/* 2️⃣ WhatNew Links */}
        <div className="footer-links">
          <h4>Whatnew</h4>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/WhatnewAffiliates">Whatnew Affiliates</a></li>
          </ul>
        </div>

        {/* 3️⃣ Get Help Links */}
        <div className="footer-links">
          <h4>Get Help</h4>
          <ul>
            <li><a href="/order-status">Order Status</a></li>
            <li><a href="/payment">Payment</a></li>
            <li><a href="/shippingdelivery">Shipping Delivery</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/Contact1">Contact Us</a></li>
          </ul>
        </div>

        {/* 4️⃣ Social Section */}
        <div className="footer-social-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61578902294823"
              className="social-icon"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/whatnew.live/"
              className="social-icon"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/whatnew/?viewAsMember=true"
              className="social-icon"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="footer-brand-link">
            Whatnew
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
