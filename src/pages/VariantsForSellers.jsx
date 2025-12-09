import React from "react";
import "./VariantsForSellers.css";

import Header1 from "../components/Header1"; 

export default function VariantsForSellers() {
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
          <h1>Variants for Sellers</h1>
          <p>WhatNew Support March 27, 2025 at 4:26 PM</p>
        </div>
      </div>

    {/* ===== Seller Variants Section ===== */}
<div className="seller-variants-section">
  <div className="seller-variants-content">
    <h2>What are Variants?</h2>
    <p>
      Variants allow sellers on <strong>WhatNew</strong> to sell multiple options of the same product — 
      for example, different <strong>sizes</strong> or <strong>colors</strong> — as a Buy It Now or Flash Sale within a live show.
    </p>

    <p><strong>Key functionality of Variants on WhatNew:</strong></p>
    <ul>
      <li>
        Products can have up to <strong>100 variants</strong> and up to <strong>1,000 total quantity</strong>. 
        For instance, a product could have 5 variants of 200 quantity each, or 100 variants of 10 quantity each.
      </li>
      <li>
        Variants are limited to Buy It Now listings (including Flash Sales), and must be reserved for live. 
        Additionally, Variants are not eligible to receive Offers.
      </li>
      <li>
        Variants can be purchased by buyers on any platform, and can be created by sellers on 
        <strong> Web, Seller Hub, iOS, or Android</strong>.
      </li>
    </ul>

    <h3>Creating a Variant</h3>

    <h4>On iOS or Android</h4>
    <ol>
      <li>
        <strong>Step 1:</strong> Within a live, go into your shop and tap the “+” button to create a listing. 
        Select <strong>“Create Quality Listing.”</strong>
      </li>
       <img
          src="/assets/ios1.png"
          alt="Variants for Sellers on WhatNew"
          className="seller-guide-image"
        />
      <li>
        <strong>Step 2:</strong> Enter Buy It Now listing details as usual — add a category, title, description, 
        price, shipping profile, and images. Ensure <strong>Buy It Now</strong> is selected as your pricing format.
      </li>
       <img
          src="/assets/ios2.png"
          alt="Variants for Sellers on WhatNew"
          className="seller-guide-image"
        />
      <li>
        <strong>Step 3:</strong> Instead of choosing a quantity, tap the row called “Variants” to enter your variants. 
        Use the “+” button to add or the trash icon to remove variants (up to 1,000 total quantity across all). 
        Press “&lt;” to go back when finished.
      </li>
      <li>
        <strong>Step 4:</strong> Finish configuring the listing, ensure it’s <strong>“Reserved for Live”</strong>, 
        and hit <strong>Publish</strong>. Buyers can now view and purchase your variant-enabled listing.
      </li>
    </ol>

    <h4>On Seller Hub</h4>
    <ol>
      <li>
        <strong>Step 1:</strong> From the Inventory page, click the <strong>“Create Product”</strong> button.
      </li>


      <li>
        <strong>Step 2:</strong> Configure Buy It Now listing details — ensure “Accept Offers” is off and 
        “Reserve for Live” is on.
      </li>
      <li>
        <strong>Step 3:</strong> Scroll down to enable the <strong>Variants</strong> section below quantity. 
        Add or delete variants as needed.
      </li>
      <li>
        <strong>Step 4:</strong> Hit <strong>Publish</strong>. You can also save as draft if not ready.
      </li>
      <li>
        <strong>Step 5:</strong> Done! Buyers can now purchase your variant-enabled listing during lives or Flash Sales.
      </li>
    </ol>

    <h4>On Web Live Show</h4>
    <ol>
      <li>
        <strong>Step 1:</strong> Click the “Add” button in your Live Shop and select 
        <strong>“Create Temporary Listing.”</strong>
      </li>
       <img
          src="/assets/ios3.png.png"
          alt="Variants for Sellers on WhatNew"
          className="seller-guide-image"
        />
      <li>
        <strong>Step 2:</strong> Add listing details as usual — title, price, shipping, etc. Quantity will be 
        calculated from your variants.
      </li>
       <img
          src="/assets/ios4.png"
          alt="Variants for Sellers on WhatNew"
          className="seller-guide-image"
        />
      <li>
        <strong>Step 3:</strong> Scroll down and tap the <strong>“Variants”</strong> section. 
        Ensure <strong>Buy It Now</strong> is selected and “Allow offers” is turned off.
      </li>
      <li>
        <strong>Step 4:</strong> Add or remove variants using “+” or the trash icon. Press <strong>Confirm</strong> 
        when done.
      </li>
      
      <li>
        <strong>Step 5:</strong> Click <strong>Confirm</strong> again to publish your listing — and that’s it!
      </li>
    </ol>

    <h3>FAQs</h3>
    <ol>
      <li>
        <strong>How will Variants appear in Sold and Shipping flows?</strong><br />
        Purchases will appear as <em>Listing Title [Variant Title]</em> everywhere — for example, 
        “WhatNew Pin [Yellow]”.
      </li>
      <li>
        <strong>What if buyers get an error buying a Variant?</strong><br />
        Make sure buyers on iOS or Android have updated to the latest version of the WhatNew app.
      </li>
      <li>
        <strong>Can I use Flash Sales with Variants?</strong><br />
        Yes! Flash Sales work great with Variants — sell multiple sizes or colors in one sale.
      </li>
      <li>
        <strong>Can I use Variants with gifting or offers?</strong><br />
        No. Variants do not currently support offers or gifting.
      </li>
    </ol>
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
