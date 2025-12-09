import React from "react";
import "./CardBreaksPolicy.css";

import Header1 from "../components/Header1"; 

export default function CardBreaksPolicy() {
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
          <h1>Card Breaks Policy</h1>
          <p>WhatNew Support March 27, 2025 at 4:52 AM</p>
        </div>
      </div>

{/* ===== Card Breaks Policy Section ===== */}
<div className="card-breaks-policy-section">
  <div className="card-breaks-policy-content">

    <p>
      At WhatNew, we craft our policies to ensure our community can feel safe and confident in their purchases. 
      In order to maintain a trustworthy buying experience, we’ve created guidelines for sellers to demonstrate 
      that they are acting fairly and transparently when running <strong>Card Breaks</strong>.
    </p>

    <p>
      Card Breaks are the opening of a professionally sealed card product (including cases, boxes, packs) among 
      multiple participants, where the contents of specific sealed products are not known.
    </p>

    {/* ===== Item Descriptions and Presentation ===== */}
    <h3>Item Descriptions and Presentation</h3>
    <ul>
      <li>
        <strong>Card Breaks must be fully visible:</strong> The full display of any Card Break must be kept 
        onscreen from the sale of an item to the end of the Break. This can be done over multiple cameras. 
        This includes sealed and unsealed product, tools, or other essential elements of a Card Break, such as 
        hands while dealing with cards or opening of product. Removing sealed or opened packs, boxes, or cards 
        from the full visibility of the stream prior to the product reveal is a violation of our rules.
      </li>
      <li>
        Here are examples of policy-compliant Card Break camera setups. These visibility requirements also apply 
        to the opening of sealed card product to a single individual (commonly referred to as “personals” or “rip-and-ship”).
      </li>
      <li>
        <strong>Rules must be shared:</strong> The rules for any Card Break run must be in Show Notes or in the item listings 
        for the Card Break. This includes, if relevant, what is considered “base” or “bulk” cards, and how those cards will be distributed.
      </li>
      <li>
        <strong>Example:</strong> Sharing the rules in your listing — “Full case team break; participants purchase a team, hits and 
        inserts that match the team are sent to the purchasers. Bulk cards are not sent.”
      </li>
      <li>
        <strong>Breaks are Cards-only:</strong> Items such as jerseys, helmets, bats, and other non-card memorabilia cannot be 
        included as part of any Break. Any opening of non-card product must comply with our Surprise Products Policy.
      </li>
    </ul>

    {/* ===== Rules and Conduct ===== */}
    <h3>Rules and Conduct</h3>
    <ul>
      <li>
        <strong>Every buyer must receive a card:</strong> Each buyer must receive, at a minimum, one card for each Card Break purchase.
      </li>
      <li>
        For breaks where sellers can guarantee that each buyer receives a card directly from the break (e.g., hit drafts), sellers may 
        only auction as many break spots as there are cards in the break, such that each buyer is guaranteed a card directly from the 
        break for each purchase.
      </li>
      <li>
        For break formats where a seller cannot guarantee that each entrant receives a card (e.g., team breaks), every person must be 
        shipped, at a minimum, one card for each purchase.
      </li>
      <li>
        <strong>No Card Breaks that span multiple shows, and no off-platform pre-sales:</strong> All product from a Card Break must 
        be opened in the same live show. You cannot open product from a Card Break over the course of multiple streams. Positions in 
        Card Breaks on WhatNew cannot be sold off-platform, including as pre-sales or in advance.
      </li>
      <li>
        In the event that spots in a Card Break don’t sell, Sellers should honor any buyer refund requests but can continue to sell 
        spots in future breaks (while respecting WhatNew’s shipping requirements) so long as the sealed product has not yet been opened. 
        Sellers can also contact Seller Support to ensure earlier purchases are canceled and refunded.
      </li>
      <li>
        <strong>No participants can be related to the seller:</strong> Individuals who are members of the same household, family members, 
        or seller’s employees may not enter a seller’s Card Break.
      </li>
    </ul>

    {/* ===== Notes ===== */}
    
     <p className="note-1">
      If sealed card products from a Surprise Set purchase will be opened for a buyer (“rip-and-ship”), 
      the seller must open and show the contents during the livestream, in full visibility.
    </p>

   

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
