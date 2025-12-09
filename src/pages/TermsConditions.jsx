import React from "react";
import "./TermsConditions.css";

import Header1 from "../components/Header1"; 

export default function TermsCondtions() {
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
          <h1>Tips Terms and Conditions</h1>
          <p>WhatNew Support May 29, 2025 at 3:35 AM</p>
        </div>
      </div>

{/* ===== Tips Terms & Conditions Section ===== */}
<div className="tips-terms-conditions-section">
  <div className="tips-terms-conditions-content">
   

    <p>
      Your use of the Tips feature, and your payment or receipt of tips on WhatNew, are subject 
      to the following Tips Terms and Conditions, under which the Tips feature is made available. 
      All tips and the use of the Tips feature are further subject to WhatNew’s Terms of Service 
      (the “Terms”), which are incorporated by reference into these Tips Terms & Conditions. 
      For clarity, all Tips transactions will be considered “Transactions” for purposes of the 
      Terms, notwithstanding that such Tips Transaction does not contemplate or require the 
      shipment of a tangible item or the receipt by buyers of an Item (each as defined in the Terms) 
      to complete the Transaction.
    </p>

    <h3>Limitations and Rules</h3>
    <ul>
      <li>Use of the Tips feature is limited to registered WhatNew App users in the United States, Canada, United Kingdom, and France. Other users cannot send or receive tips at this time.</li>
      <li>For Tips Transactions, sellers receive 100% of the listed tip amount; WhatNew does not charge a commission fee.</li>
      <li>Buyers are charged standard processing fees added to the tip amount before finalizing the transaction.</li>
      <li>Credit and debit cards are the only permissible payment methods; Apple Pay and PayPal are not supported.</li>
      <li>Users may only tip between ₹1 and ₹100 per tip, depending on location.</li>
      <li>Tipping volume per tipper is limited to ₹200 or 10 tips maximum per seller per livestream, and a maximum of ₹500 in total tips per day.</li>
      <li>All Tips Transactions are binding and non-refundable.</li>
      <li>Only buyers who previously purchased from a seller are eligible to tip that seller.</li>
      <li>There is a 15-second cooldown period for tipping; after a tip, you must wait 30 seconds before tipping again.</li>
      <li>Users can only tip sellers using the methods listed in Tipping a Seller. Sellers are prohibited from soliciting tips outside the built-in tip functionality.</li>
      <li>Tips cannot be used to circumvent fees or facilitate sales of products/goods; violations will result in account action.</li>
      <li>Tips may not be exchanged for content or services that violate community guidelines, including Adult or Mature content.</li>
      <li>Tip thank-you notes must follow community guidelines; report violations via the reporting tool.</li>
      <li>Violation of these Terms may result in termination of access to the Tips feature.</li>
      <li>These Terms are subject to change at any time without notice.</li>
    </ul>
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
