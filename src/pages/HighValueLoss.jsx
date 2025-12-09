import React from "react";
import "./HighValueLoss.css";

import Header1 from "../components/Header1"; 

export default function HighValueLoss() {
  return (
    <div>
        <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">WhatNew</a> /
      <a href="/safety-policy">Safety & Policy</a> /{"General "}
          </nav>
          <h1>High Value Loss Reimbursement Policy</h1>
          <p>WhatNew Support June 13, 2025 at 11:47 AM</p>
        </div>
      </div>

{/* ===== High Value Reimbursement Policy Section ===== */}
<div className="high-value-reimbursement-section">
  <div className="high-value-reimbursement-content">
    <h3>What this means for buyers:</h3>
    <p>
      In order to maintain a trustworthy marketplace where people feel secure and protected in 
      their purchases, WhatNew will reimburse buyers at the market price of a high-value hit card 
      if it is missing from a break.
    </p>

    <p>
      In order to receive a reimbursement, buyers must contact WhatNew within the required 
      timeframes, and not be otherwise excluded from a refund, as set out in our WhatNew Buyer 
      Protection policy.
    </p>

    <p>
      In order to be eligible for a High Value Reimbursement, buyers are asked to provide the 
      following information: order number, description of the item(s) that are missing, photo of 
      the item you are missing, time-stamp from the VOD when you purchased the item, the estimated 
      value of the missing item, and linked sources for your estimated value.
    </p>

    <p>
      If this information is not provided, your order will not qualify for a high-value reimbursement. 
      WhatNew will be monitoring for potential abuse of the process and may decline reimbursement if 
      there is a pattern of refund abuse.
    </p>

    <h3>What this means for sellers:</h3>
    <p>
      We encourage U.S. sellers to add Signature-Required Delivery, and all sellers to add insurance 
      to their packages containing high value items. Sellers are responsible for ensuring buyers receive 
      exactly what they bought, on time and as advertised. In the event that a high value package is not 
      protected and lost in transit, Sellers may be responsible for covering the cost of the full Market Value. 
      Learn more about protecting your orders.
    </p>

    <p>
      WhatNew is monitoring the frequency of reports of missing high-value cards. Repeated instances of 
      missing hit cards will result in account penalties, suspension, or ban.
    </p>

    <p>
      Sellers will be accountable if a buyer didn’t receive exactly what they bought due to a mistake or 
      theft by a seller’s employee. In the event of misconduct, sellers will be financially responsible 
      and may be billed back the market price of the item. We recommend sellers invest in training employees 
      on packaging and shipping on time. We also encourage sellers to install cameras in your fulfillment 
      facility to guard against theft and to be able to provide proof of shipment.
    </p>

    <p>
      If a seller does not have proof of packaging and shipping high value items correctly, they may be 
      billed back the market price of the item.
    </p>

    <p>
      Sellers may be billed back for the market price of an item if they send the item to a user other 
      than as set out in their seller dashboard.
    </p>
  </div>
</div>




{/* ===== Tips, Terms & Conditions Section ===== */}
<div className="tips-terms-section">
  <h2 className="tips-terms-title">Articles in this section</h2>

  <div className="tips-terms-card">
    <div className="tips-terms-links">
        <a href="/terms-conditions" className="buyer-policies-link">
         Tips Terms and Conditions
          </a>
      <a href="/seller-coupon-terms" className="tips-terms-link">
        Seller Coupon Terms & Conditions
      </a>
     <a href="/high-value-loss" className="tips-terms-link">
        High Value Loss Reimbursement Policy
      </a>
       <a href="/buyer-referral-program" className="buyer-policies-link">
            Buyer Referral Program Terms
          </a>
    </div>
  </div>
</div>



</div>




     
 
  );
}
