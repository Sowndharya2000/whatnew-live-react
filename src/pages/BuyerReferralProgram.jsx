import React from "react";
import "./BuyerReferralProgram.css";

import Header1 from "../components/Header1"; 

export default function BuyerReferralProgram() {
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
          <h1>Buyer Referral Program Terms</h1>
          <p>WhatNew Support June 11, 2025 at 5:07 AM</p>
        </div>
      </div>

 <div className="buyer-referral-section">
      <div className="buyer-referral-content">
       
        <p>
          The WhatNew Buyer Referral Program allows you to give your friends or social media following
          free money to spend towards their first purchase on WhatNew and earn credit for yourself when
          they use that credit to make a purchase.
        </p>

        <p>Please note, there is a separate Seller Referral Program.</p>

        <h3>What do I get for referring buyers to WhatNew?</h3>
        <p>
          Referral credit bonuses vary by buyer/seller status and country. Sellers can offer a higher
          referral credit amount to buyers, and every referral automatically follows their account for
          7 days. Visit the referral hub in the app for your specific offer details.
        </p>
        <p>
          Referral credit has no minimum spend and can be used in shows and on the WhatNew marketplace.
          Credit cannot currently be applied to offers, auctions, taxes, or shipping.
        </p>

        <h3>How can I refer buyers to WhatNew?</h3>
        <ul>
          <li><strong>App:</strong> Tap the gift icon on the home page or the referral banner in your profile, then select “Share Link”.</li>
          <li><strong>Web:</strong> Tap the referral icon or go to your profile and choose “Refer a Buyer”, then select “Copy Link”.</li>
        </ul>

        <h3>How can I get referral credit?</h3>
        <p>It’s as simple as being referred by a seller or buyer!</p>

        <h4>Referral Links</h4>
        <ol>
          <li>Tap the referral link</li>
          <li>Complete the form</li>
          <li>Download the app and verify your phone number</li>
        </ol>

        <h4>Referral Codes (Deprecated)</h4>
        <p>
          Referral codes are no longer being issued, but existing codes can still be claimed via the app
          or at checkout.
        </p>

        <h3>Checking Referral Status</h3>
        <ul>
          <li>
            <strong>App:</strong> Tap the referrals icon or banner in your profile → “View your referral history”.
          </li>
          <li>
            <strong>Web (Sellers Only):</strong> Visit the referrals page in the seller hub.
          </li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <ol>
          <li><strong>When do I get my referral credit?</strong> After your referral’s first purchase is delivered.</li>
          <li><strong>How do I use my referral credit?</strong> It applies automatically at checkout (excluding local pickup).</li>
          <li><strong>I didn’t receive my referral credit.</strong> Tap the referral link again or contact WhatNew Support.</li>
        </ol>

        <h3>Program Terms and Conditions</h3>
        <p>
          These terms apply to all standard, randomized, and tiered referral programs. Participation
          requires agreeing to these terms, which form part of the WhatNew Terms of Use.
        </p>

        <p>
          Credits have no cash value, are non-transferable, and expire 90 days after issuance. WhatNew
          may change or terminate the program at any time. Abuse or fraudulent activity will result in
          suspension or revocation of credits.
        </p>

        <p>
          Full details are available in the app and on the WhatNew website. Continued participation
          after changes constitutes agreement to the updated terms.
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
