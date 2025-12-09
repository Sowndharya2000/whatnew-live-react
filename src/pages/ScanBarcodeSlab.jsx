import React from "react";
import "./ScanBarcodeSlab.css";

import Header1 from "../components/Header1"; 

export default function ScanBarcodeSlab() {
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
          <h1>Scan a barcode or slab to list your item</h1>
          <p>WhatNew Support May 19, 2025 at 11:34 PM</p>
        </div>
      </div>

  {/* ===== Seller Barcode & Slab Scanning Guide Section ===== */}
<div className="seller-scan-section">
  <div className="seller-scan-content">
  
    <p>
      This article explains how to <strong>scan a barcode (UPC) or slab</strong> to quickly import product info when creating a listing. 
      When you scan, <strong>WhatNew</strong> will automatically fill in key product details to speed up the listing process.
    </p>

    <p className="note">
      <strong>Note:</strong> This feature is only available on the <strong>WhatNew app for iPhone</strong>.
    </p>

    {/* ===== Example Images ===== */}
    <div className="seller-scan-images">
      <img src="assets/th.jpeg" alt="Barcode scanning example" className="seller-guide-image" />
    
    </div>

    <h3>What can get auto-filled:</h3>
    <ul>
      <li>Category</li>
      <li>Title</li>
      <li>Description</li>
      <li>Attributes</li>
      <li>Shipping profile</li>
    </ul>

    <h3>Supported grading services and item types:</h3>
    <ul>
      <li>PSA (Sports, Pokémon)</li>
      <li>CGC (TCG, Comics)</li>
      <li>PCGS / NGC (Coins)</li>
    </ul>

    <h3>How to scan a barcode or slab</h3>
    <ol>
      <li>Open the <strong>WhatNew app for iPhone</strong>.</li>
      <li>Tap <strong>Seller Hub</strong> at the bottom of the screen.</li>
      <li>Select <strong>Create a Product</strong>.</li>
      <li>Under <strong>Media</strong>, tap <strong>Add Photos/Videos/Scan</strong>.</li>
      <li>Select <strong>Scan a Barcode or Slab</strong>.</li>
      <li>Scan a universal product code (UPC) or slab to import product details.</li>
      <li>Review the product information and tap <strong>Import</strong>.</li>
    </ol>

    <p>
      Complete your listing by filling in any required or missing details:
    </p>
    <ul>
      <li><strong>Photo:</strong> Upload a photo or video of your product (slab scans require a photo added separately).</li>
      <li><strong>Category:</strong> Choose the correct category (e.g., Trading Card Game, Pokémon, Sports).</li>
      <li><strong>Title:</strong> Include item name, published year, and grade number.</li>
      <li><strong>Description:</strong> Describe your item accurately.</li>
      <li><strong>Condition:</strong> Choose the correct condition (refer to Item Condition Guidelines).</li>
      <li><strong>Name:</strong> Official name of the item.</li>
      <li><strong>Year:</strong> The year the item was first released.</li>
      <li><strong>Graded:</strong> Toggle on if the item is graded.</li>
      <li><strong>Grading Service/Company:</strong> The company that graded your item.</li>
      <li><strong>Grade:</strong> Grade number given to the item.</li>
      <li><strong>Cert Number:</strong> Certification number next to the grade barcode.</li>
    </ul>

    <h3>Additional details for graded items:</h3>
    <h4>For graded cards:</h4>
    <ul>
      <li><strong>Brand:</strong> Card’s set (e.g., Pokémon Base Set, Jungle Set).</li>
      <li><strong>Variety:</strong> Variant type (e.g., Holographic, Standard Print).</li>
      <li><strong>Card Number:</strong> Collector number (e.g., 073/070).</li>
    </ul>

    <h4>For graded comic books:</h4>
    <ul>
      <li><strong>Series:</strong> Name of the comic book series.</li>
      <li><strong>Issue Number:</strong> Comic’s issue number.</li>
      <li><strong>Artist:</strong> Comic’s artist(s).</li>
      <li><strong>Character:</strong> Featured characters.</li>
      <li><strong>Publisher:</strong> Company that published the comic.</li>
      <li><strong>Genre:</strong> Comic book genre.</li>
      <li><strong>Features:</strong> Variant info (e.g., Key Issue, First Appearance).</li>
    </ul>

    <h4>For graded coins:</h4>
    <ul>
      <li><strong>Product Type:</strong> Type of coin (e.g., Bullion, Ancient).</li>
      <li><strong>Composition:</strong> Precious metal used.</li>
      <li><strong>Precious Metal Weight:</strong> Weight of the metal.</li>
      <li><strong>Fineness:</strong> Purity of the metal.</li>
      <li><strong>Mint Mark:</strong> Mint location indicator.</li>
      <li><strong>Strike Type:</strong> Finish or strike style (e.g., Proof).</li>
    </ul>

    <h3>Final Steps</h3>
    <ul>
      <li>Add item pricing and shipping details.</li>
      <li>Tap <strong>Publish</strong> to list your product on WhatNew.</li>
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
