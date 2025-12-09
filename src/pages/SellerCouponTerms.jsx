import React from "react";
import "./SellerCouponTerms.css";

import Header1 from "../components/Header1"; 

export default function SellerCouponTerms() {
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
          <h1>Seller Coupon Terms & Conditions</h1>
          <p>WhatNew Support May 30, 2025 at 5:45 AM</p>
        </div>
      </div>

{/* ===== Seller Coupon Terms & Conditions Section ===== */}
<div className="seller-coupon-terms-section">
  <div className="seller-coupon-terms-content">
    <p>
      Each Seller promotional code (“Coupon”) is offered by a Seller (as defined in the Terms) 
      who is the sole organizer of the Coupon. These are the Seller’s terms and conditions under 
      which the Coupon is made available. All Coupons and the use thereof are subject to WhatNew’s 
      Terms of Service (the “Terms”), which are incorporated by reference into these Coupon Terms & Conditions. 
      For clarity, with respect to sales where a Coupon has been applied, the WhatNew Commission Fee (8%) 
      and Processing Fee (2.9% + ₹0.30) described in our Fee Schedule applies to the final sale price.
    </p>

    <h3>WhatNew Disclaimers</h3>
    <p>
      While WhatNew attempts to provide accurate descriptions for the products, offers, coupons, discount codes, 
      sales and other information shown within or through the App, much of the information we display (including Coupons) 
      is provided by third parties that we do not control. We do not represent or warrant that the Coupons, or related 
      merchant information or terms shown through the App are accurate, complete, reliable, current, or error-free. 
      The inclusion of any products as part of the Coupon within the App at a particular time does not imply or warrant 
      that these products will be available at any other time.
    </p>

    <p>
      Exclusions, restrictions, and terms and conditions (including third-party merchant exclusions, restrictions, 
      and terms and conditions) may apply to Coupons. Deals change often, and due to this, your application of Coupons 
      at checkout may or may not result in savings for your order. WhatNew is not liable or responsible for any Seller 
      performance or failure to perform any services related to the Coupons including Sellers’ suspension, cancellation, 
      amendment or revocation of the Coupons at any time for any reason and without notice.
    </p>

    <p>
      Sellers are independently responsible for determining eligibility for the Coupons they offer and may limit Coupon 
      eligibility to specific buyer audiences (for example, Coupons for first time buyers only) in a manner consistent 
      with the Terms and applicable law.
    </p>

    <h3>Limitations and Rules</h3>
    <ul>
      <li>Coupon eligibility is determined by the Seller offering the Coupon.</li>
      <li>Each Coupon is a limited time offer subject to availability.</li>
      <li>Coupons only apply to eligible items that are offered for sale on the App by the Seller who created the Coupon.</li>
      <li>Coupons may be applied to only one purchased item in a livestream.</li>
      <li>Each Coupon may only be used once per eligible person.</li>
      <li>Coupon use is limited to registered App users who are logged into their App accounts.</li>
      <li>Coupon offers can terminate at any time, including before the stated offer end date, for any reason, including budget limitations.</li>
      <li>If you are eligible for a refund in accordance with the Terms, any refund you may receive will not include the Coupon or its redemption value.</li>
      <li>Coupons are non-transferable and cannot be sold.</li>
      <li>Coupons cannot be combined with other Coupons, discounts, rebates, or other promotions.</li>
      <li>Each Coupon is subject to applicable laws, void where prohibited, not redeemable for cash, and has no face value.</li>
      <li>Any currency displayed on a Coupon will be in United States dollars (USD) unless otherwise stated.</li>
      <li>Coupon Terms & Conditions are subject to change at any time without notice.</li>
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
