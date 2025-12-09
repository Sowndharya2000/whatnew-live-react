import React from "react";
import "./SurpriseProductsPolicy.css";

import Header1 from "../components/Header1"; 

export default function SurpriseProductsPolicy() {
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
          <h1>Surprise Products Policy</h1>
          <p>WhatNew Support Today, 1:51 AM</p>
        </div>
      </div>

{/* ===== Surprise Products Policy Section ===== */}
<div className="surprise-products-policy-section">
  <div className="surprise-products-policy-content">
 
    <p>
      At WhatNew, we craft our policies to ensure our community feels confident
      in their purchases. In order to maintain a trustworthy buying experience,
      we’ve created guidelines for sellers to demonstrate that they are acting
      fairly and transparently when selling Surprise Products (formerly referred
      to as Mystery Games). Failure to follow these rules, or engaging in any
      fraudulent or deceptive behavior, will result in account penalties,
      including permanent bans.
    </p>

    <p>
      Surprise Products are a type of sale where an individual does not know
      exactly what they will receive until after the purchase. A Surprise
      Product can include one or more individual items/products, all of which
      will be received by the purchaser.
    </p>

    <p>
      Surprise Products can be sold either individually as a{" "}
      <strong>Single Surprise Product</strong> (for example, when a single blind
      box, bundle, or pallet of unknown items is sold to one person) or as a{" "}
      <strong>Set of Surprise Products</strong> (where multiple Surprise
      Products within the set are distributed at random to multiple purchasers).
    </p>

    <p>
      This policy does not apply to the sale of:
      <ul>
        <li>Card Breaks (subject to their own policy)</li>
        <li>
          Personal shopping, or “Build-Your-Own-Box” offers, where items are
          assembled after purchase.
        </li>
      </ul>
    </p>

    {/* ===== Single Surprise Products Rules ===== */}
    <h3>Single Surprise Products</h3>
    <p>When Surprise Products are sold individually, the following rules apply:</p>
    <ul>
      <li>
        Single Surprise Products cannot be presented to buyers with the
        possibility of a prize. For example, sellers cannot claim that a
        surprise product sold in a show may contain a very rare item.
      </li>
      <li>
        Sellers must include an accurate description of the contents of the
        Single Surprise Product with enough detail that individuals know what to
        expect from their purchase (brand, item type, condition, and quantity).
      </li>
    
    </ul>

    {/* ===== Surprise Sets ===== */}
    <h3>Set of Surprise Products (Surprise Sets)</h3>
    <p>When Surprise Products are sold from a set, the following rules apply:</p>

    <h4>Randomization and Visibility</h4>
    <ul>
      <li>
        Distribution of Surprise Products cannot be randomized through a
        physical machine (e.g., vending, gumball, or raffle drum).
      </li>
      <li>All Surprise Products sold must be opened and shown during the show.</li>
      <li>All Surprise Products must be kept on screen during the show.</li>
      <li>
        You can only sell as many listings for Surprise Products as there are in
        the Surprise Set.
      </li>
    </ul>

    <h4>Full Detailed List Required</h4>
    <p>
      In the listing description, sellers must provide a full detailed checklist
      of all items in each Surprise Product within each set. The description of
      each item in the checklist must include:
    </p>
    <ul>
      <li>Brand/Manufacturer (where relevant)</li>
      <li>Title/Product Name</li>
      <li>Condition</li>
      <li>Quantity (if more than one item)</li>
      <li>
        Consistent details such as grading, if applicable, for all listed items.
      </li>
    </ul>

    <p>
      <strong>Example compliant listing:</strong> One Pink Brand Necklace, NWT.
      One Blue Brand Necklace, Condition: Fair. Two Pink Brand Necklaces,
      Condition: Fair. Two Blue Brand Necklaces, Condition: Good.
    </p>

    <h4>No Prize</h4>
    <p>
      Sellers cannot include a prize in their Surprise Set or describe the floor,
      ceiling, or average of the items in the set.
    </p>

    <h4>Same Product Only</h4>
    <p>
      Sellers must include only items of the same type in a Surprise Set. For
      example:
    </p>
    <ul>
      <li>Sports Cards: cannot include a photo with a card.</li>
      <li>Coins & Money: cannot mix coins and paper money.</li>
      <li>Beauty: cannot mix lipstick and blush.</li>
      <li>Electronics: cannot mix headphones and phones.</li>
      <li>Jewelry: cannot mix bracelets and rings.</li>
      <li>Drinks & Snacks: cannot mix coffee and chips.</li>
      <li>Fashion: cannot mix leggings and tank tops.</li>
      <li>Plants: cannot mix plants and pots.</li>
      <li>Toys: cannot mix plushes and dolls.</li>
      <li>Trading Cards: cannot mix Digimon and Naruto cards.</li>
    </ul>

    <h4>Minimum Value Requirements</h4>
    <p>In specific categories, minimum item value applies:</p>
    <ul>
      <li>Bags & Accessories: ₹150 (Bags), ₹50 (Accessories)</li>
      <li>Sneakers & Streetwear: ₹50</li>
      <li>Sports Memorabilia: ₹35</li>
    </ul>

    <p>
      <strong>Gated Category Requirements:</strong> Selling Surprise Products in
      Bags & Accessories or Sneakers & Streetwear requires approval.
    
    </p>

    {/* ===== UK Only Rules ===== */}
    <h3>UK Only Surprise Set Rules</h3>
    <p>
      These changes are being rolled out in the UK first, with other markets to
      follow. Sometimes policies are phased to test and monitor performance.
    </p>

    <h4>In-App Randomizer Required</h4>
    <ul>
      <li>
        Sellers must use the Surprise Set Feature to list and distribute
        Surprise Sets.
      </li>
      <li>
        The use of physical randomizers, third-party randomizers, or concealed
        containers (bags, boxes, drawers) is not permitted.
      </li>
    </ul>

    <h4>Full Detailed List Required (UK)</h4>
    <p>
      When using the Surprise Set Feature, sellers must include a complete
      detailed checklist of all items in each set directly in the feature. No
      placeholders (“item 1”, “ticket 1”) are permitted.
    </p>

    <ul>
      <li>Brand/Manufacturer (or unbranded, if relevant)</li>
      <li>Title/Product Name</li>
      <li>Condition</li>
      <li>Quantity (if multiple items)</li>
      <li>Consistent grading details (if applicable)</li>
    </ul>

    <p>
      <strong>Example:</strong> A compliant Sports Cards Surprise Set checklist
      includes all cards with clear brand, condition, and grading details.
    </p>
    <img src="assets/Sports.png"></img>

    <h4>Listing Expectations for Coins in Surprise Sets</h4>
    <p>
      When listing coins, all graded coins must list their grade. Ungraded (raw)
      coins must be categorized as:
    </p>
    <ul>
      <li>Poor – Fair</li>
      <li>Good – Extremely Fine</li>
      <li>Uncirculated – Mint</li>
    </ul>

    <p>
      Example: Each coin is the same type and condition is clearly explained,
      even when ungraded.
    </p>
     <img src="assets/12.png"></img>
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
