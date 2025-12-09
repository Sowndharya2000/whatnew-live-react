import React from "react";
import "./Seller.css";
import Header1 from "../components/Header1";

export default function SellerPolicy() {
  return (
    <div>
      <Header1 />

      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> /{" "}
            <a href="/safety-policy">Safety & Policy</a> / General
          </nav>
          <h1>Seller Policy</h1>
          <p>WhatNew Support — June 11, 2025 at 5:07 AM</p>
        </div>
      </div>

      {/* ===== Seller Protection Policy Section ===== */}
      <div className="seller-protection-policy-section">
        <div className="seller-protection-policy-content">
          <p>
            WhatNew is committed to empowering sellers by enforcing protections
            that allow them to focus on what matters most — growing their
            business and building their communities. With safeguards in place to
            shield them from malicious behavior and ensure timely payment for
            completed sales, sellers on WhatNew can confidently manage their
            business and focus on their goals. Below is an overview of seller
            responsibilities, protections, and eligibility guidelines to ensure
            you qualify for these protections.
          </p>

          <h3>WhatNew Seller Protections</h3>
          <p>WhatNew offers several protections to sellers:</p>
          <ul>
            <li>
              <strong>Refund Abuse:</strong> WhatNew monitors buyer behavior for
              potential abuse across the platform. If a buyer is found abusing
              the system, you will not be responsible for that refund.
            </li>
            <li>
              <strong>Problems with Returned Items:</strong> If an item returned
              to you is not in the condition you originally shipped it, contact
              WhatNew Support for assistance.
            </li>
            <li>
              <strong>Chargebacks:</strong> Sellers are not responsible for
              chargebacks. If a buyer files a chargeback, they will not be
              eligible to receive a refund on that transaction.
            </li>
          </ul>

          <div className="note-1">
            <strong>Dispute Process:</strong> In the case of a dispute, WhatNew
            will investigate with relevant submitted information from both buyer
            and seller and make a balanced decision based on which party
            followed the platform’s guidelines.
          </div>

          <p>
            If you’ve purchased <strong>XCover Shipping Protection</strong>,
            please file your claim directly with XCover if the item got lost,
            stolen, or damaged in transit. See more information about XCover
            Protection in <em>Protecting your Shipments</em>. Please review the
            terms, conditions, and exclusions. Protection is provided by Cover
            Genius and powered by XCover.
          </p>

          <h3>Seller Responsibilities</h3>
          <p>
            As a seller, you are responsible for ensuring that all items are
            delivered to buyers in the condition described at the time of sale.
            If you meet this requirement, you will be paid by WhatNew for your
            order. However, you may be charged for refunds in the following
            situations:
          </p>

          <ul>
            <li>
              <strong>Incomplete or incorrect items:</strong> One or more items
              are missing or incorrect.
            </li>
            <li>
              <strong>Item Not as Described or Inauthentic:</strong> Items
              received are damaged, expired, defective, counterfeit or fake, or
              do not match the condition description.
            </li>
            <li>
              <strong>Failure to ship:</strong> Items are not shipped or dropped
              off within 2 business days of sale (8 business days for plants).
              Sellers must ensure all packages are scanned by the carrier (one
              scan from a SCAN sheet is not sufficient).
            </li>
            <li>
              <strong>High rate of lost items:</strong> Accounts with an
              excessive number of missing or undelivered items may lose
              protection eligibility.
            </li>
          </ul>

          <div className="note-2">
            <strong>Appeal Process:</strong> If you believe a refund or return
            decision was made in error, you may file an appeal or dispute with
            WhatNew Support for review.
          </div>
        </div>
      </div>

      {/* ===== Related Policies Section ===== */}
      <div className="policies-section">
        <h2 className="policies-heading">Articles in this section</h2>
        <div className="policies-container">
          <div className="policies-list">
            <a href="/surprise-products-policy" className="policies-item">
              Surprise Products Policy
            </a>
            <a href="/card-breaks-policy" className="policies-item">
              Card Breaks Policy
            </a>
            <a href="/mondial-proof-of-dropoff" className="policies-item">
              Mondial Proof of Drop-off
            </a>
            <a href="/novelty-replica-coins-policy" className="policies-item">
              Novelty or Replica Coins Policy
            </a>
            <a href="/food-drink-policy" className="policies-item">
              WhatNew Food & Drink Policy
            </a>
            <a href="/seller-protection-policy" className="policies-item">
              WhatNew Seller Protection Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
