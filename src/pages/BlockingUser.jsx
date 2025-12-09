import React from "react";
import "./BlockingUser.css";

import Header1 from "../components/Header1"; 

export default function BlockingUser() {
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
          <h1>Blocking a User</h1>
          <p>WhatNew Support June 12, 2025 at 12:05 AM</p>
        </div>
      </div>

 {/* ===== Block or Unblock Users Policy Section ===== */}
<div className="block-users-policy-section">
  <div className="block-users-policy-content">
    <p>
      At <strong>WhatNew</strong>, you can block a user to prevent them from:
    </p>

    <ul>
      <li>Following you.</li>
      <li>Direct messaging you in the app.</li>
      <li>Viewing your profile.</li>
      <li>Bookmarking, joining, and chatting in your livestreams.</li>
      <li>
        Making future purchases from your marketplace listings. Any existing orders
        with this user at the time they were blocked will still be honored.
      </li>
    </ul>

  <p className="note-1">
  <strong>Note:</strong> If you feel that someone is breaking any of WhatNew’s 
  Community Guidelines, you can also report that user to our Trust and Safety team.
</p>

    <h3>How to Block a User</h3>
    <ol>
      <li>Open the WhatNew app on the web or mobile.</li>
      <li>Go to the user’s profile.</li>
      <li>
        Tap or click the three-dot icon at the top right of that user’s profile, 
        then select <strong>Block User</strong>.
      </li>
      <li>Click or tap <strong>Block</strong> (web and Android) to confirm.</li>
    </ol>

    <h3>FAQs</h3>

    <h4>I blocked another user — how do I unblock them?</h4>
    <p>
      You will need to search for the blocked user by name in the app, go to their profile, 
      tap the menu at the top, and choose <strong>“Unblock.”</strong>
    </p>

    <h4>Where can I see a list of blocked users?</h4>
    <p>
      We currently do not have a way for users to see a list of all the users they have blocked. 
      Make sure you want to block someone, because currently blocking is <strong>permanent!</strong>
    </p>

    <h4>I got banned from a livestream — why?</h4>
    <p>
      Either the stream host or a moderator removed you from the show. 
      Please review our Community Guidelines
      to ensure your actions comply with them.
    </p>
    <p>
      If you are removed from a livestream, it is only for that livestream — 
      this is not the same as being blocked by another user. 
      You will know you’ve been blocked if you can no longer view that user’s profile.
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
