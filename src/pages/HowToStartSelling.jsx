import React from "react";
import "./HowToStartSelling.css";

import Header1 from "../components/Header1"; 

export default function HowToStartSelling () {
  return (
    <div>
        <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">WhatNew</a> /
      <a href="/selling">Selling</a> /{"Getting Started "}
          </nav>
          <h1>How Do I Start Selling?</h1>
          <p>WhatNew Support June 20, 2025 at 8:25 PM</p>
        </div>
      </div>
{/* ===== Main Seller Getting Started Section ===== */}
<div className="getting-started-section">
  <div className="getting-started-content">
   
    <p>
      Follow these steps to get started on <strong>WhatNew</strong> – it only takes a few minutes to unlock selling access.
    </p>

    <p className="note">
      <strong>Note:</strong> In order to sell in our mobile app, you must download the WhatNew app from the{" "}
      <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">Apple App Store</a> or{" "}
      <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">Google Play</a>.
    </p>

    <h2>1. Apply to Sell</h2>
    <ul>
      <li>In the WhatNew app, tap the <strong>“+”</strong> marked <strong>“Sell”</strong> at the bottom of your screen.</li>
      <li>
        On a web browser, go to{" "}
        <a href="https://whatnot.com/apply-to-sell" target="_blank" rel="noopener noreferrer">
          whatnot.com/apply-to-sell
        </a>.
      </li>
      <li>Complete the seller application — a short series of questions about you and your business.</li>
      <li>Once you’ve been approved, you can sell via live show or on our marketplace.</li>
    </ul>

    <h2>2. Schedule Your Show</h2>
    <p>
      Follow the steps <a href="#">here</a> to schedule your first livestream.
    </p>

    <h2>3. Prepare for Your Show</h2>
    <ul>
      <li>Gather the products you’re going to sell.</li>
      <li>Add the products to your shop.</li>
      <li>Ensure you have packing materials and a way to print labels.</li>
      <li>You can practice using <strong>rehearsal mode</strong> or by running a private stream.</li>
    </ul>

    <h2>4. Go Live and Sell</h2>
    <p>
      We recommend following the tips and tricks in our <strong>Seller Academy</strong> to make your first show run as smoothly as possible.
    </p>

    <p>
      Once you’ve gone live and made your first sales, learn{" "}
      <a href="#">how to ship your orders</a> and <a href="#">how to get paid</a>.
    </p>

    <p>
      Please check out our <a href="#">Sellers FAQ</a> page if you have more specific questions!
    </p>
  </div>
</div>
{/* ===== Seller Getting Started Section ===== */}
<div className="seller-gettingstarted-section">
  <h2 className="seller-gettingstarted-title">Articles in this section</h2>

  <div className="seller-gettingstarted-card">
    <div className="seller-gettingstarted-links">
      <a href="/how-to-start-selling" className="seller-gettingstarted-link">
        How Do I Start Selling?
      </a>
      <a href="/seller-application-faq" className="seller-gettingstarted-link">
        Seller Application FAQ
      </a>
      <a href="/set-up-shipping" className="seller-gettingstarted-link">
        Set Up Shipping Settings Before You Sell
      </a>
      <a href="/list-your-items" className="seller-gettingstarted-link">
        How to List Your Items on WhatNew: A Guide for New Sellers
      </a>
      <a href="/sales-match-bonus" className="seller-gettingstarted-link">
        The New Seller Sales Match Bonus
      </a>
      <a href="/submit-request" className="seller-gettingstarted-link">
        Submit A Request
      </a>
      <a href="/user-guide" className="seller-gettingstarted-link">
        WhatNew User Guide
      </a>
    </div>
  </div>
  </div>
     
    </div>
  );
}
