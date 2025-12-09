import React from "react";
import "./ListingGuidelines.css";

import Header1 from "../components/Header1"; 

export default function ListingGuidelines() {
  return (
    <div>
        <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">WhatNew</a> /
      <a href="/selling">Selling</a> /{"Getting Started "}
          </nav>
          <h1>WhatNew Listing Guidelines</h1>
          <p>WhatNew Support May 7, 2025 at 3:04 AM</p>
        </div>
      </div>

  {/* ===== Seller Listing Guidelines Section ===== */}
<div className="seller-guidelines-section">
  <div className="seller-guidelines-content">
  
    <p>
      To keep <strong>WhatNew</strong> safe and provide a great experience for both buyers and sellers, 
      we have the following guidelines and requirements for listings. 
      Anything that compromises the integrity of the platform is not allowed.
    </p>

    <h3>The following is not permitted in any listings on WhatNew:</h3>
    <ul>
      <li>
        <strong>No item listed:</strong> Listings must always offer an item for sale (or giveaway). 
        Do not post listings for tips such as “buy me a coffee.” Please use the tipping feature instead.
      </li>
      <li>
        <strong>Keywords in listings:</strong> Do not include irrelevant or trending keywords 
        just to gain visibility in search results.
      </li>
      <li>
        <strong>Clickbait content:</strong> Listings must not contain misleading images, links, titles, 
        or descriptions that promote unrelated items or direct users off the platform.
      </li>
      <li>
        <strong>Violates our policies:</strong> Listings must not violate our 
        <em> Prohibited or Restricted Items Policy, Community Guidelines,</em> or <em>IP Policy.</em>
      </li>
    </ul>

    <h3>Photo Requirements</h3>
    <ul>
      <li>
        <strong>Photo(s) of actual item:</strong> Listings must include photos of the actual item being sold. 
        Stock photos or no-photo listings are not allowed (except for new, unused products where permitted). 
        Ensure you own or have rights to use the images.
      </li>
      <li>
        <strong>Clear photos:</strong> Include at least one photo that clearly shows the full item and its condition. 
        Images should not be blurred, cropped, or obstructed.
      </li>
    </ul>

    <h3>Description & Title Requirements</h3>
    <ul>
      <li>
        <strong>Accurate listing description:</strong> Your title and description must correctly represent 
        the item being sold, including its condition and all relevant product details.
      </li>
      <li>
        <strong>Category:</strong> List your item in the correct <strong>WhatNew</strong> category.
      </li>
      <li>
        <strong>Pricing:</strong> Listing prices must be reasonable and not extremely high or low.
      </li>
      <li>
        <strong>Repeated listings:</strong> Don’t post multiple listings for the same item. 
        Instead, use quantity &gt;1 for identical items.
      </li>
    </ul>

    <h3> Item-Specific Requirements</h3>
    <ul>
      <li><strong>Prohibited items:</strong> Items that fall under the Prohibited or Restricted Items Policy are not allowed.</li>
      <li><strong>Surprise Sets:</strong> These are not permitted in marketplace listings.</li>
      <li><strong>Giveaway entries:</strong> Do not list giveaways or contest entries.</li>
      <li>
        <strong>Items with autographs:</strong> Must be certified by 
        <em> JSA, PSA, Fanatics, Beckett,</em> or <em>B.A.M.</em> 
        Include a photo of the certification card (except for Beckett’s sticker model).
      </li>
    </ul>
  </div>
</div>


{/* ===== Seller Listing Section ===== */}
<div className="seller-listing-section">
  <h2 className="seller-listing-title">Articles in this section</h2>

  <div className="seller-listing-card">
    <div className="seller-listing-links">
      <a href="/variants-for-sellers" className="seller-listing-link">
        Variants for Sellers
      </a>
      <a href="/wholesale-category-policy" className="seller-listing-link">
        WhatNew Wholesale Category Policy
      </a>
      <a href="/how-to-list-products" className="seller-listing-link">
        How to List Products on WhatNew
      </a>
      <a href="/listing-guidelines" className="seller-listing-link">
        WhatNew Listing Guidelines
      </a>
      <a href="/scan-barcode-slab" className="seller-listing-link">
        Scan a Barcode or Slab to List Your Item
      </a>
    </div>
  </div>
</div>


     
    </div>
  );
}
