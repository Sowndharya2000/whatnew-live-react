import React from "react";
import "./SafetyPolicy.css";
import Header1 from "./Header1";
const SafetyPolicy = () => {
  return (
    <>
    <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>Safety & Policies</span>
          </nav>
          <h1>Safety & Policies</h1>
         
        </div>
      </div>

     {/* ===== General Policies Section ===== */}
<div className="general-policies-container">
  <h2 className="general-policies-title">General</h2>

  <div className="general-policies-card">
    <div className="general-policies-links">
     
      <a href="/adult-explicit-items-policy" className="general-policies-link">
        Adult & Explicit Items Policy
      </a>
      <a href="/animal-related-policy" className="general-policies-link">
        Animal Related Policy
      </a>
      <a href="/communication-scams-policy" className="general-policies-link">
        Avoiding Communication Scams on WhatNew
      </a>
      <a href="/blocking-user" className="general-policies-link">
        Blocking a User
      </a>
      <a href="/cad-faq" className="general-policies-link">
        CAD FAQ
      </a>
      <a href="/report-form" className="general-policies-link">
        WhatNew Report Form
      </a>
    </div>
  </div>
</div>

<div className="buyer-policies-container">
      <h2 className="buyer-policies-title">Buyer</h2>

      <div className="buyer-policies-card">
        <div className="buyer-policies-links">
       
          <a href="/terms-conditions" className="buyer-policies-link">
         Tips Terms and Conditions
          </a>
          <a href="/seller-coupon-terms" className="buyer-policies-link">
            Seller Coupon Terms & Conditions
          </a>
         <a href="/high-value-loss" className="buyer-policies-link">
        High Value Loss Reimbursement Policy
      </a>
          <a href="/buyer-referral-program" className="buyer-policies-link">
            Buyer Referral Program Terms
          </a>
        </div>
      </div>
    </div>

    {/* ===== Seller Policies Section ===== */}
<div className="seller-policies-container">
  <h2 className="seller-policies-title">Seller</h2>

  <div className="seller-policies-card">
    <div className="seller-policies-links">

      <a href="/surprise-products-policy" className="seller-policies-link">
        Surprise Products Policy
      </a>

      <a href="/card-breaks-policy" className="seller-policies-link">
        Card Breaks Policy
      </a>

      <a href="/mondial-proof-of-dropoff" className="seller-policies-link">
        Mondial Proof of Drop-off
      </a>

      <a href="/novelty-replica-coins-policy" className="seller-policies-link">
        Novelty or Replica Coins Policy
      </a>

      <a href="/food-drink-policy" className="seller-policies-link">
        WhatNew Food & Drink Policy
      </a>

      <a href="/seller-protection-policy" className="seller-policies-link">
        WhatNew Seller Protection Policy
      </a>

    </div>
  </div>
</div>

 
    </>
  );
};

export default SafetyPolicy;
