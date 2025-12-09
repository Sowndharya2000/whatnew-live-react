import React from "react";
import "./CadFAQ.css";

import Header1 from "../components/Header1"; 

export default function CadFAQ() {
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
          <h1>CAD FAQ</h1>
          <p>WhatNew Support April 9, 2025 at 4:40 AM</p>
        </div>
      </div>

{/* ===== General Information: Selling in CAD ===== */}
<div className="general-info-section">
  <div className="general-info-content">
    <h2>General Information</h2>

    <h3>Who has access to selling in CAD?</h3>
    <p>
      Starting <strong>April 15, 2025</strong>, all Canadian sellers will sell in CAD. 
      No Canadian sellers will be able to sell in USD.
    </p>

    <h3>What exactly is getting converted to CAD?</h3>
    <p>
      All aspects of running your business will be converted to CAD. 
      This includes listings, auctions, BINs, flash sales, offers, tips, rewards club, coupons, etc.
    </p>

    <h3>Can I still run things in USD after my account converts?</h3>
    <p>No. After conversion, you’ll only be able to run and list items in CAD.</p>

    <h3>Can I revert my account back to USD?</h3>
    <p>
      No, all Canadian sellers will permanently transition to CAD. 
      This brings Canada in line with all other countries on WhatNew in selling in local currency.
    </p>

    <h2>Buyer Effects</h2>

    <h3>Will US buyers continue to see USD in my streams?</h3>
    <p>
      No, all buyers will purchase in CAD. 
      Non-Canadian buyers will see local currency estimates alongside CAD.
    </p>

    <h3>How will FX fees work for buyers?</h3>
    <p>
      Buyers using CAD payment methods will not incur FX fees. 
      Others may incur minor FX charges depending on their payment provider.
    </p>

    <h3>What will happen to my referral currency balance?</h3>
    <p>
      Any USD referral credits earned before conversion will remain in USD. 
      You can still use them in USD-denominated streams.
    </p>

    <h3>Why can’t my buyers use PayPal in my stream?</h3>
    <p>
      PayPal will not be available for CAD transactions for now — 
      this applies to both purchases and withdrawals.
    </p>

    <h2>Seller Effects</h2>

    <h3>What will happen to my USD balance after my account is converted?</h3>
    <p>
      Your USD balance will automatically be cashed out to your default payout method upon conversion. 
      Any pending USD orders will still settle and be paid out in USD for 60 days.
    </p>

    <h3>How do I see my USD balance after conversion?</h3>
    <p>
      On web → Account Icon → Selling Tab → Financials.  
      Your CAD balance appears first, followed by pending USD payouts.
    </p>

    <h3>How will FX fees work for sellers?</h3>
    <p>
      CAD sales are paid out in CAD. 
      Link a CAD bank account to avoid FX payout fees.
    </p>

    <h3>How will my listings be converted from USD to CAD?</h3>
    <p>
      Listings convert using the <strong>Bank of Canada</strong> exchange rate on conversion day. 
      You can edit prices after conversion.
    </p>

    <h3>How will my rewards and coupons be converted?</h3>
    <p>
      Rewards and thresholds convert using the Bank of Canada FX rate the day prior to conversion. 
      Sellers will need to reissue coupons in CAD.
    </p>

    <h3>What happens if I have a negative USD balance?</h3>
    <p>
      Any negative USD balance will be converted to an equivalent negative CAD balance.
    </p>

    <h3>Why are Ads still in USD?</h3>
    <p>
      Ads will remain in USD for 60 days after conversion. 
      After that, ad purchases will move to CAD balances.
    </p>

    <h2>Payouts</h2>

    <h3>Will payouts be in CAD or USD?</h3>
    <p>
      New sales after conversion pay out in CAD. 
      Orders sold before conversion but completed within 60 days will pay out in USD.
    </p>

    <h3>Can I still use PayPal for payouts?</h3>
    <p>
      PayPal payouts in CAD will be disabled. 
      You’ll need to link a bank account for CAD payouts after the transition period.
    </p>

    <h3>How can I link a new bank account for CAD payouts?</h3>
    <p>
      Visit the Seller Academy for details on setting up new payout accounts via Web, iOS, or Android.
    </p>

    <h3>What is Stripe and do I need an account?</h3>
    <p>
      Stripe securely connects your bank account to WhatNew for payouts. 
      You only need to upload your bank info — no fees apply.
    </p>

    <p className="note-1">
      <strong>Note:</strong> You can visit the Seller Academy
      for complete payout and conversion setup guidance.
    </p>
  </div>
</div>




{/* ===== General Policies Listing Section ===== */}
<div className="general-policies-listing-section">
  <h2 className="general-policies-listing-title">Articles in this section</h2>

  <div className="general-policies-listing-card">
    <div className="general-policies-listing-links">
      <a href="/adult-explicit-items-policy" className="general-policies-listing-link">
        Adult & Explicit Items Policy
      </a>
      <a href="/animal-related-policy" className="general-policies-listing-link">
        Animal Related Policy
      </a>
      <a href="/communication-scams-policy" className="general-policies-listing-link">
        Avoiding Communication Scams on WhatNew
      </a>
      <a href="/blocking-user" className="general-policies-listing-link">
        Blocking a User
      </a>
      <a href="/cad-faq" className="general-policies-listing-link">
        CAD FAQ
      </a>
      <a href="/report-form" className="general-policies-listing-link">
        WhatNew Report Form
      </a>
    </div>
  </div>
</div>




     
    </div>
  );
}
