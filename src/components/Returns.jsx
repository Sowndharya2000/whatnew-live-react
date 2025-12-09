import React from "react";
import "./Return.css";
import Header1 from "./Header1";
const Returns = () => {
  return (
    <>
    <Header1 />
      {/* Banner Section */}
 
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>General</span>
          </nav>
          <h1>WhatNew Buyer Protection Policy
</h1>
          <p>WhatNew Support May 16, 2025 at 7:02 PM.</p>
        </div>
      </div>
   

     <div className="help-section">
  <div className="help-content">
   

    <h3>When buyers are entitled to a refund</h3>
    <p>
      Our Buyer Protection Policy covers the following issues, provided you submit your request within the specified timelines, 
      and the request isn’t excluded under the “Exclusions to WhatNew Buyer Protection” section:
    </p>

    <ul>
      <li>Incomplete or incorrect items: One or more items are missing or incorrect.</li>
      <li>Item Not as Described or Inauthentic: Items received are damaged, expired, defective, counterfeit, or do not match the condition description.</li>
      <li>Package not received: Items are lost, delayed in transit, not shipped, misdelivered, or not received after being marked “delivered” by the carrier.</li>
      <li>Full list of covered issues under Additional Details below.</li>
    </ul>

    <p>
      You must submit your request by the earlier of 30 days from purchase or 14 days from delivery for your request to be eligible under WhatNew Buyer Protection. Certain categories have specific deadlines:
    </p>

    <ul>
      <li><strong>Coins & Money, Sports Cards, Sneakers & Streetwear, Trading Card Games, Luxury Goods:</strong> Submit your request by the earlier of 7 days of delivery or 30 days from purchase.</li>
      <li><strong>Plants:</strong> Submit your request by the earlier of 2 days of delivery or 30 days from purchase.</li>
    </ul>

   
  </div>
</div>
    </>
  );
};

export default Returns;
