import React from "react";
import "./Food.css";

import Header1 from "../components/Header1"; 

export default function FoodDrinkPolicy() {
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
          <h1>WhatNew Food & Drink Policy</h1>
          <p>WhatNew Support April 24, 2025 at 6:49 AM</p>
        </div>
      </div>

{/* ===== Food & Drink Policy Section ===== */}
<div className="food-drink-policy-section">
  <div className="food-drink-policy-content">

    <p>
      WhatNew limits the sale of certain food & drink items to keep our community healthy and safe.
    </p>

    <p>
      The following food and drink items are <strong>not permitted</strong> on WhatNew:
    </p>

    <ul>
      <li>Alcohol</li>
      <li>
        Food products that are or may be unsafe, contaminated, or easily contaminated, including:
        <ul>
          <li>Raw meat, seafood, and fish (including sushi)</li>
          <li>Unpasteurized juice or dairy products (except unpasteurized cheese that complies with applicable regulations)</li>
          <li>Ackee fruit or seeds</li>
          <li>Wild mushrooms</li>
        </ul>
      </li>
      <li>Expired or recalled food products</li>
      <li>Consumable products containing any amount of THC or other illegal substances</li>
    </ul>

    <h3>When selling food on WhatNew, you must also follow the below requirements:</h3>

    <ul>
      <li>
        <strong>Preparing, labeling, and packaging:</strong> Ensure you follow all applicable laws and rules relating to preparing, labeling, and packaging food and drink items.
      </li>
      <li>
        <strong>Delivery, expiry, and condition:</strong> Ensure items are delivered prior to their expiration date (including “best buy” date or similar), are not recalled, and arrive in substantially the same condition as described when sold. 
        If you are shipping items, ensure you comply with any applicable shipping terms.
      </li>
      <li>
        <strong>Homemade food and drink:</strong> The sale of homemade food and drink items must comply with applicable government regulations, including certification, licensing, ingredients, allergens, and storage.
      </li>
      <li>
        <strong>Applicable laws and regulations:</strong> Sellers are responsible for complying with all laws and regulations applicable to their jurisdiction and that of their buyers. 
        For guidance, speak with a qualified professional. For general reference, you may find the following helpful:
      </li>
    </ul>

    <h3>Helpful Resources</h3>

    <ul>
      <li><strong>United States:</strong> Gateway to Federal Food Safety Information, USDA’s Food Safety and Inspection Service, FDA Recalls, Market Withdrawals, & Safety Alerts, FDA food imports and exports</li>
      <li><strong>European Union:</strong> EU food laws and regulations, EU food law general requirements</li>
      <li><strong>France:</strong> Ministry of Agriculture and Food, National Agency for Food, Environmental and Occupational Health Safety (ANSES)</li>
      <li><strong>United Kingdom:</strong> Food Standards Agency key regulations, Food Standards Agency imports and exports</li>
      <li><strong>Canada:</strong> Canadian Food Inspection Agency, Imports – Canadian Food Inspection Agency, Food and Drugs Act, Canada Border Services Agency: Importing Products into Canada</li>
    </ul>

  </div>
</div>




{/* ===== Policies Section ===== */} 
<div className="policies-section"> 
<h2 className="policies-heading">Articles in this section</h2> 
<div className="policies-container"> 
<div className="policies-list"> 
<a href="/surprise-products-policy" className="policies-item"> Surprise Products Policy </a> 
<a href="/card-breaks-policy" className="policies-item"> Card Breaks Policy </a> 
<a href="/mondial-proof-of-dropoff" className="policies-item"> Mondial Proof of Drop-off </a> 
<a href="/novelty-replica-coins-policy" className="policies-item"> Novelty or Replica Coins Policy</a>
 <a href="/food-drink-policy" className="policies-item"> WhatNew Food & Drink Policy </a>
  <a href="/seller-protection-policy" className="policies-item"> WhatNew Seller Protection Policy </a> 
  </div> 
  </div> 
  </div>



</div>




     
 
  );
}
