import React from "react";
import "./CommunicationScamsPolicy.css";

import Header1 from "../components/Header1"; 

export default function CommunicationScamsPolicy() {
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
          <h1>Avoiding communication scams on WhatNew</h1>
          <p>WhatNew Support August 13, 2024 at 12:12 AM</p>
        </div>
      </div>

 {/* ===== Scam & Fraud Awareness Section ===== */}
<div className="scam-awareness-section">
  <div className="scam-awareness-content">
    <p>
      Scammers may use emails, text messages, or in-app DMs to trick you into giving them your personal and financial information. 
      They may be interested in your passwords, account numbers, Social Security numbers, borrowing money or other information for their financial gain.
    </p>

    <p>
      While <strong>WhatNew’s Trust & Safety</strong> team is always working to eliminate scams on WhatNew, it is also important for you to recognize deceptive behavior to protect yourself and your information.
    </p>

    <p>
      If you receive any suspicious messages, do not click on any links or provide your personal or financial information. 
      If you receive a scam email, please report it as spam and disregard it. 
      If you receive suspicious direct messaging within WhatNew, please report the user within the app. 
      If you are unsure or have questions, please contact <a href="mailto:support@WhatNew.com">support@WhatNew.com</a>.
    </p>

    <h3>How to Identify Scams</h3>
    <p>To help you avoid scams, we have set out some guidance and example scams below.</p>

    <h4>1. Impersonation of WhatNew Representatives</h4>
    <p>
      Scammers may pretend to be representatives of WhatNew. Please be cautious when receiving suspicious DMs or emails from someone claiming to be a WhatNew representative.
    </p>

    <ul>
      <li>All WhatNew emails come from the <strong>@whatNew.com</strong> domain.</li>
      <li>
        Examples of official WhatNew email addresses include:
        <ul>
          <li><a href="mailto:sellersupport@WhatNew.com">sellersupport@WhatNew.com</a></li>
          <li><a href="mailto:trustandsafety@WhatNew.com">trustandsafety@WhatNew.com</a></li>
          <li><a href="mailto:employee@WhatNew.com">[WhatNew employee name]@WhatNew.com</a></li>
        </ul>
      </li>
     
      <li>WhatNew will <strong>NEVER</strong> ask for your payment details via email.</li>
      <li>WhatNew will <strong>NEVER</strong> request prepaid cards or ask you to activate “Instant Payouts.”</li>
    </ul>

    <h4>2. Fake Buyer or Seller Messages</h4>
    <p>
      Scammers may pretend to have information from WhatNew representatives. 
      A scammer may pose as a buyer claiming that WhatNew contacted them asking for you to take an action (like updating payment details). 
      WhatNew will always contact you directly if you need to update your account.
    </p>

    <h4>3. Romance or Relationship Scams</h4>
    <p>
      Scammers may try to build a relationship or romantic connection over DM, then later request money or information. 
      These scams may continue for weeks or months before the scammer makes a request.
    </p>

    <ul>
      <li>Be cautious when communicating with users who seek romantic connections then ask for money.</li>
      <li>Do not share personal or banking information over DM.</li>
    </ul>

    <h4>4. Giveaway Scams</h4>
    <p>
      Scammers may message users saying they’ve “won a free item” and request shipping or customs fees to receive it.
    </p>
    <ul>
      <li>Be careful of messages asking you to pay advance fees for “free” items.</li>
      <li>Do not share personal or payment information over DM.</li>
    </ul>

    <h4>5. Impersonating Buyers in Livestreams</h4>
    <p>
      Some scammers impersonate buyers after the real buyer leaves a livestream, using similar usernames and profile pictures.
    </p>
    <ul>
      <li>Sellers should always confirm they are shipping to the original buyer.</li>
      <li>Never open sealed products or send items to anyone other than the verified buyer.</li>
      <li>All sales must occur through the WhatNew livestream or marketplace — never via DMs.</li>
    </ul>
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
