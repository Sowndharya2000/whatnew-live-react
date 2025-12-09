import React from "react";
import "./Mondial.css";

import Header1 from "../components/Header1"; 

export default function MondialProofOfDropOff() {
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
          <h1>Mondial Proof of Drop-off</h1>
          <p>WhatNew Support February 10, 2025 at 8:20 PM</p>
        </div>
      </div>

 <div className="mondial-proof-section">
      <div className="mondial-proof-content">


        <p className="mondial-proof-text">
          Mondial Relay will provide a confirmation email from{" "}
          <strong>noreply@mondialrelay.fr</strong> for packages shipped with them.
          Please use this email as proof of drop-off in the event that our support
          team contacts you regarding a package.
        </p>

        <div className="mondial-proof-image">
          <img src="assets/11.png" alt="Mondial Relay Proof Example" />
        </div>
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
