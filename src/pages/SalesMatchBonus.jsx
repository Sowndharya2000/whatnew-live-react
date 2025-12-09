import React from "react";
import "./SalesMatchBonus.css";

import Header1 from "../components/Header1"; 

export default function SalesMatchBonus() {
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
          <h1>The New Seller Sales Match Bonus</h1>
          <p>WhatNew Support June 20, 2025 at 8:25 PM</p>
        </div>
      </div>

  
{/* ===== New Seller Sales Match Bonus Section ===== */}
<div className="sales-bonus-section">
  <div className="sales-bonus-content">
   
    <p>
      To help you get started and reward the first steps in your WhatNew journey, we’re excited to offer the <strong>New Seller Sales Match Bonus</strong>.
    </p>

    <h3>How it works</h3>
    <p>
      WhatNew will match your sales up to a certain amount across the bonus period.
    </p>

    <h3>What does it mean to “match sales”?</h3>
    <p>
      Matching your sales means that for every ₹1 of item(s) you sell, WhatNew will give you an additional ₹1.
    </p>
    <ul>
      <li>Buyer purchases an item from you for ₹10 (+ shipping + taxes)</li>
      <li>WhatNew will give you an additional ₹10 to match the cost of the item you sold</li>
    </ul>

    <h3>When does the bonus period start and how long is it?</h3>
    <p>
      The bonus period starts as soon as you are given selling access. In the WhatNew app, you’ll see a banner on your Home Feed showing how much time remains to earn your bonus.
    </p>

    <h3>Requirements to earn the Sales Match Bonus</h3>
    <ul>
      <li>Go live for a minimum duration (e.g., 120 minutes)</li>
      <li>Sell to a specific number of different buyers (e.g., at least 5 buyers)</li>
    </ul>

    <h3>How much can I earn?</h3>
    <p>
      The maximum bonus amount varies by location and product type. Sellers can earn anywhere from ₹1 up to their maximum limit shown in the app.
    </p>

    <h3>Example Scenarios</h3>
    <ul>
      <li>
        <strong>Example 1:</strong> 150 mins live , 7 buyers , ₹120 in sales → ₹120 bonus
      </li>
      <li>
        <strong>Example 2:</strong> 300 mins live , 20 buyers , ₹500 in sales → ₹150 bonus (max reached)
      </li>
      <li>
        <strong>Example 3:</strong> 90 mins live , 8 buyers , ₹180 in sales → No bonus (time requirement not met)
      </li>
    </ul>

    <h3>When will I be paid?</h3>
    <p>
      Your bonus will be added to your WhatNew account balance within <strong>14 days</strong> of the end of the bonus period after all requirements are met and all qualifying orders are shipped.
    </p>

    <h3>Where will I see the payment?</h3>
    <ul>
      <li>
        <strong>On Mobile:</strong> Seller Hub → Payouts → Transactions
      </li>
      <li>
        <strong>On Desktop:</strong> Seller Hub → Financials → Ledger
      </li>
    </ul>

    <h3>Terms & Conditions</h3>
    <p>
      The Cash Match for New Sellers promotion (“Offer”) rewards new sellers for making their first sales. To qualify, sales must occur during livestreams where you’ve completed an auction or BIN sale. Local pick-up or private livestream sales are excluded.
    </p>
    <p>
      Bonuses will be credited within 14 days after the bonus period ends, provided all eligible orders are shipped. WhatNew reserves the right to decline or rescind bonuses if fraudulent activity or violations of the Terms of Service are detected.
    </p>
    <p>
      The reward, when combined with other offers, may not exceed ₹1,500 per household per year. Offer is non-transferable and subject to change without notice.
    </p>

    <p><strong>Taxes:</strong> All applicable taxes are the seller’s responsibility.</p>
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
