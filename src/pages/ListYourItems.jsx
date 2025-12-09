import React from "react";
import "./ListYourItems.css";

import Header1 from "../components/Header1"; 

export default function ListYourItems() {
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
          <h1>How to List Your Items on WhatNew: A Guide for New Sellers</h1>
          <p>WhatNew Support June 20, 2025 at 8:25 PM</p>
        </div>
      </div>

  
{/* ===== Listing Guide Section ===== */}
<div className="listing-guide-section">
  <div className="listing-guide-content">
    <p>
      Listing your items might feel overwhelming at first, but this guide will walk you through your options
      and help you choose the best setup for your inventory.
    </p>

    <h3>Before You Start: Weighing Items Accurately</h3>
    <p>
      Your item’s weight determines its shipping cost – so it’s crucial to enter the correct weight when listing.
    </p>

    <ul>
      <li><strong>Underestimating weight →</strong> USPS may return the package to you.</li>
      <li><strong>Overestimating weight →</strong> Buyers may overpay for shipping.</li>
    </ul>

    <p> <strong>Tip:</strong> Use a scale. When in doubt, it’s better to round up slightly than under-report.</p>

    <h3>Types of Listings on WhatNew</h3>
    <p>When creating a listing, you’ll first choose between two formats:</p>

    <ul>
      <li>
        <strong>Temporary Listings:</strong> Only visible during the live show; disappear when the show ends; quick to create.
      </li>
      <li>
        <strong>Quality Listings:</strong> Stay active after the show ends; ideal for long-term visibility.
      </li>
    </ul>

    <p>Each listing can also be set as one of the following:</p>

    <ul>
      <li><strong>Auction:</strong> Price increases as viewers bid during the show.</li>
      <li><strong>Buy-It-Now (BIN):</strong> Fixed price; available during and after the show.</li>
    </ul>

    <p>Additional options for BIN listings only:</p>
    <ul>
      <li><strong>Accept Offers:</strong> Let buyers submit offers.</li>
      <li><strong>Flash Sales:</strong> Discount BIN items temporarily during shows (Quality Listings only).</li>
    </ul>

    <p>Most sellers use a mix of Auction and BIN listings to offer buyers more ways to shop.</p>

    <h3>Shipping Settings for Your First Show</h3>
    <p>We recommend the following setup:</p>

    <ul>
      <li>
        <strong>Under 3 oz:</strong> Leave USPS First-Class Letter <strong>OFF</strong> for now (no tracking).
      </li>
      <li>
        <strong>Domestic Shipments (1–5 lbs and 5+ lbs):</strong> Check the USPS Priority Mail option.
      </li>
    </ul>

    <p>
      When creating listings, choose a Shipping Profile that reflects the item’s weight.
      If in between weights, select the higher weight to avoid under-reporting.
    </p>

    <h3>Which Listing Format Should You Use?</h3>
    <p><strong>Selling a handful of unique items?</strong> Use Quality Listings with clear photos and descriptions.</p>
    <p><strong>Selling a high volume of items?</strong> Use Temporary Listings grouped by weight.</p>

    <p>For example:</p>
    <ul>
      <li>Create a listing titled “1–2 lbs”</li>
      <li>Set quantity to 100</li>
      <li>Keep “List these products individually” turned off</li>
      <li>WhatNew will auto-label items as “1–2 lbs #1”, “1–2 lbs #2”, etc.</li>
      <li>Use sticky notes or labels to match items</li>
    </ul>

    <p>This method works great for high-volume or randomized inventory.</p>

    <p><strong>Selling many unique items?</strong> Try our <strong>CSV uploader</strong>.</p>
    <p><strong>Running a card break?</strong> Use the <strong>Breaks Feature</strong>.</p>
    <p><strong>Running a Surprise Set?</strong> Use the <strong>Surprise Sets Feature</strong>.</p>
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
