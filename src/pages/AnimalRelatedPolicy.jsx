import React from "react";
import "./AnimalRelatedPolicy.css";

import Header1 from "../components/Header1"; 

export default function AnimalRelatedPolicy() {
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
          <h1>Animal Related Policy</h1>
          <p>WhatNew Support February 10, 2025 at 8:42 PM</p>
        </div>
      </div>

  {/* ===== Animal Related Policy Section ===== */}
<div className="animal-policy-section">
  <div className="animal-policy-content">
   
    <p>
      To ensure animal welfare and the protection of the environment, we have rules around 
      the sale of animal items on <strong>WhatNew</strong>.
    </p>

    <h3>Endangered and Regulated Animal Items</h3>
    <p>
      Animal items derived from endangered or threatened species, or that are otherwise 
      protected by law, are not permitted to be offered for sale, or given away, on 
      <strong> WhatNew</strong>. This includes items derived from:
    </p>

    <ul>
      <li>Endangered or threatened animals as identified by the CITES Appendix I.</li>
      <li>Whale blubber or similar (e.g., whale candles).</li>
      <li>Domesticated dogs or cats.</li>
      <li>
        Ivory or bone from ivory-producing animals, including narwhal, dugong, elephant, 
        hippopotamus, orca, sperm whale, walrus, warthog, and wooly mammoth.
      </li>
      <li>Animals otherwise prohibited or protected by applicable laws.</li>
    </ul>

    <h3>Live Animals</h3>
    <p>
      Live animals are not permitted to be offered for sale, or given away, in most cases. 
      <strong> WhatNew</strong> permits the sale of fish, aquatic snails, coral, lobster, 
      and live bait and worms.
    </p>
    <p>
      As a reminder, the sale of any live animal must comply with applicable shipping 
      requirements and all laws and regulations applicable in both the jurisdiction of 
      your business and your buyer’s jurisdiction (including obtaining any relevant permits 
      or licenses).
    </p>

    <p>
      If you have any questions about the sale of animal items on <strong>WhatNew</strong>, 
      please contact <strong>WhatNew Support</strong>.
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
