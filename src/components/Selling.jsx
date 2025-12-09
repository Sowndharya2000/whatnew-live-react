import React from "react";
import "./Selling.css";
import Header1 from "./Header1";
const Account = () => {
  return (
    <>
    <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>Selling</span>
          </nav>
          <h1>Selling</h1>
         
        </div>
      </div>

     {/* ===== Getting Started Section ===== */}
      <div className="getting-started-container">
        <h2 className="getting-started-title">Getting Started</h2>

        <div className="getting-started-card">
          <div className="getting-started-links">
            <a href="/how-to-start-selling" className="getting-started-link">
              How Do I Start Selling?
            </a>
            <a href="/seller-application-faq" className="getting-started-link">
              Seller Application FAQ
            </a>
            <a href="/set-up-shipping" className="getting-started-link">
              Set Up Shipping Settings Before You Sell
            </a>
            <a href="/list-your-items" className="getting-started-link">
              How to List Your Items on WhatNew: A Guide for New Sellers
            </a>
            <a href="/sales-match-bonus" className="getting-started-link">
              The New Seller Sales Match Bonus
            </a>
            <a href="/submit-request" className="getting-started-link">
              Submit A Request
            </a>
            <a href="/user-guide" className="getting-started-link">
              WhatNew User Guide
            </a>
          </div>
        </div>
{/* ===== Listing Section ===== */}
<div className="listing-container">
  <h2 className="listing-title">Listing</h2>

  <div className="listing-card">
    <div className="listing-links">
      <a href="/variants-for-sellers" className="listing-link">
        Variants for Sellers
      </a>
      <a href="/wholesale-category-policy" className="listing-link">
        WhatNew Wholesale Category Policy
      </a>
      <a href="/how-to-list-products" className="listing-link">
        How to List Products on WhatNew
      </a>
      <a href="/listing-guidelines" className="listing-link">
        WhatNew Listing Guidelines
      </a>
      <a href="/scan-barcode-slab" className="listing-link">
        Scan a Barcode or Slab to List Your Item
      </a>
    </div>
  </div>
</div>

{/* ===== Going Live Section ===== */}
<div className="going-live-container">
  <h2 className="going-live-title">Going Live</h2>

  <div className="going-live-card">
    <div className="going-live-links">
      <a href="/how-to-schedule-a-show" className="going-live-link">
        How to Schedule a Show
      </a>
      <a href="/prohibited-or-restricted-items" className="going-live-link">
        Prohibited or Restricted Items on WhatNew
      </a>
      <a href="/show-management-for-sellers" className="going-live-link">
        Show Management for WhatNew Sellers
      </a>
      <a href="/running-a-giveaway-during-livestream" className="going-live-link">
        Running a Giveaway During a Livestream
      </a>
      <a href="/inviting-a-cohost-to-your-live" className="going-live-link">
        Inviting a Co-host to Your Live
      </a>
    </div>
  </div>
</div>


      </div>
 
    </>
  );
};

export default Account;
