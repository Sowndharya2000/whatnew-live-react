import React from "react";
import "./Novalty.css";

import Header1 from "../components/Header1"; 

export default function NoveltyReplicaCoinsPolicy() {
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
          <h1>Novelty or Replica Coins Policy</h1>
          <p>WhatNew Support February 10, 2025 at 8:46 PM</p>
        </div>
      </div>

{/* ===== Novelty & Replica Coins Policy Section ===== */}
<div className="novelty-replica-coins-policy-section">
  <div className="novelty-replica-coins-policy-content">

    <p>
      WhatNew does not permit the sale of counterfeit, fake, or forged coins. However, sellers may sell 
      <strong> replica coins </strong> where the seller is clear in the relevant listing or livestream that the coin 
      is a <strong>novelty, replica, or non-legal tender</strong>.
    </p>

    <p>
      In addition, the coin itself must be easily discernible as a novelty, replica, or non-legal tender. 
      For example:
    </p>

    <ul>
      <li>
        <strong>Marking:</strong> The coin is physically marked to indicate it is a novelty, replica, or non-legal tender.
      </li>
      <li>
        <strong>Denomination & Weight:</strong> The coin omits the legal tender denomination.
      </li>
      <li>
        <strong>Appearance:</strong> The coin has artwork, color, and/or size that is clearly marked to 
        distinguish it from circulated coins.
      </li>
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
