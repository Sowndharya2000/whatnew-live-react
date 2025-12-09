import React from "react";
import "./Shipping.css";
import Header1 from "./Header1";
export default function AboutUs() {
  return (
    <div >
<Header1 />
 {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>General</span>
          </nav>
          <h1>US Shipping Guide for Buyers
</h1>
          <p>WhatNew Support June 9, 2025 at 1:41 PM</p>
        </div>
      </div>


   <div class="shipping-section">
  <div class="shipping-content">


    <p>
      This article is aimed at educating our buyers on how shipping works on WhatNew.
      We understand these can be complicated and users want clarity,
      so we wanted to provide some examples on how you will be charged for shipping
      on your orders.
    </p>

    <h2>Shipping Rates Overview</h2>
    <ul>
      <li>
        <strong>Lighter Packages (Less than 1 lb):</strong>
        WhatNew charges commercial USPS Ground Advantage Package Service rates.
      </li>

      <li>
        <strong>USPS First-Class Mail Letter Service Rates:</strong>
        <ul>
          <li>Weighs less than 3 ounces</li>
          <li>Total value is less than ₹20</li>
          <li>Only Sports Cards, TCG, or Stickers (max 5 cards)</li>
          <li>Ships from a US address to another US address</li>
        </ul>
        <p>Learn more about USPS First-Class Mail Letter shipping</p>
      </li>

      <li>
        <strong>Packages 1–5 lbs:</strong>
        ₹9.21 (₹8.77 + fees)* via USPS Priority Mail within the US
        (excluding Hawaii, Alaska, U.S. Territories, and military bases).
      </li>

      <li>
        <strong>Packages 5–70 lbs:</strong>
        Shipped via USPS Priority Mail by default, or USPS Ground Advantage if opted in.
        Pricing starts at ₹8.91 based on weight, distance, and dimensions.
      </li>
    </ul>

    <h2>Example: Shipping Costs in a Livestream</h2>
    <p>
      Suppose a buyer in Los Angeles, CA, purchases a pack of sports cards
      from a seller in Boston, MA.
    </p>
    <ul>
      <li>Zone 8 shipment (cross-country)</li>
      <li>4 oz package → ₹4.13 to ship via USPS Ground Advantage</li>
      <li>Second 4 oz pack → additional ₹0.31 (₹4.44 total)</li>
      <li>Adding sneakers (2 lbs) → extra ₹3.91 (total ₹9.21)</li>
      <li>Up to 5 lbs: no extra shipping beyond ₹9.21</li>
      <li>Beyond 5 lbs: USPS Priority Mail rates apply</li>
    </ul>

    <p>
      Bundling logic also applies to marketplace orders.
      Orders are bundled until the seller prints the label.
      Marketplace and livestream purchases are not bundled together.
    </p>

    <h2>Livestream Shipping Nuances</h2>
    <ul>
      <li>
        Sellers can offer <strong>Free or Reduced Shipping</strong> to buyers.
      </li>
      <li>
        For shipments over 5 lbs, sellers may use
        <strong>Flat-Rate (₹9.21)</strong> or
        <strong>Ground Advantage (from ₹8.91)</strong>.
      </li>
      <li>
        <strong>WhatNew Smart Bundling™</strong> automatically combines or splits
        shipments to minimize cost.
      </li>
      <li>
        Large items over 1 cubic foot are charged by
        <strong>dimensional weight</strong>.
      </li>
    </ul>
  </div>
</div>

    
    </div>
  );
}