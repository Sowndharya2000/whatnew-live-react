import React from "react";
import "./UserGuide.css";

import Header1 from "../components/Header1"; 

export default function UserGuide() {
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
          <h1>WhatNew User Guide</h1>
          <p>WhatNew Support June 20, 2025 at 8:25 PM</p>
        </div>
      </div>

     {/* ===== Seller Getting Started Guide Section ===== */}
<div className="seller-gettingstarted-section">
  <div className="seller-gettingstarted-content">
   
    <p>
     Ready to sell on WhatNew? This guide explains how to apply, set up your shop, and go live for the first time. 
      Whether you’re new to selling or just new to <strong>WhatNew</strong>, here’s what to expect at every step.
    </p>

    <h3>Step 1: Create a WhatNew account</h3>
    <p>
      You can sign up on <strong>WhatNew.com</strong> or in the mobile app.
    </p>
    <p>
      Download the WhatNew app from the <strong>Apple App Store</strong> or <strong>Google Play</strong>.
    </p>
    <p>
      We recommend downloading the app early — some seller features (like shipping settings) 
      are only available there, while others (like generating shipping labels) are easier on the web.
    </p>

    <h3>Step 2: Apply to sell</h3>
    <p>
      After creating an account, it only takes a few minutes to unlock selling access. 
      You’ll need to submit a quick application before you can list items or go live.
    </p>
    <ul>
      <li>In the WhatNew app, tap the <strong>+ Sell</strong> button at the bottom of your screen.</li>
      <li>Or go to <strong>WhatNew.com/apply-to-sell</strong> on your web browser.</li>
      <li>Fill out a short form about you and your business.</li>
    </ul>
    <p>Learn more about the <strong>application process</strong>.</p>
    <p>
      Once you’re approved, you can start selling through live shows or on the marketplace.
    </p>

    <h3>Step 3: Schedule your first show</h3>
    <p>
      You’re approved! Now it’s time to schedule your first livestream.
    </p>
    <p>
      Follow these steps to <strong>schedule a show</strong>.
    </p>

    <h3>Step 4: Prepare for your show</h3>
    <p>Make sure you’re ready before you go live:</p>
    <ul>
      <li>Gather the products you plan to sell.</li>
      <li>Add them to your shop inventory.</li>
      <li>Set up your shipping settings before your show.</li>
      <li>Make sure you have packing supplies and a way to print shipping labels.</li>
      <li>Use rehearsal mode or run a private stream to practice going live.</li>
    </ul>

    <h3>Step 5: Go live and start selling</h3>
    <p>
      When you’re ready, begin your show and start selling. 
      Check out our <strong>Seller Academy</strong> for tips to help your first show run smoothly.
    </p>

    <h3>Step 6: Fulfill the orders you sell</h3>
    <p>Once your show ends:</p>
    <ul>
      <li>Ship your orders.</li>
      <li>Get paid.</li>
    </ul>

    <h3>Need more help?</h3>
    <p>
      Explore our <strong>Seller</strong> section in the Help Center for guides and answers to common questions. 
      We’ve got you covered.
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
