import React from "react";
import "./SetUpShipping.css";

import Header1 from "../components/Header1"; 

export default function SetUpShipping() {
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
          <h1>Set up shipping settings before you sell</h1>
          <p>WhatNew Support June 20, 2025 at 8:25 PM</p>
        </div>
      </div>

     {/* ===== Seller Shipping Settings Section ===== */}
<div className="seller-shipping-settings-section">
  <div className="seller-shipping-settings-content">
    <p>
      Before you list products or go live, take a moment to review your shipping settings. This helps make sure your buyers see accurate shipping costs, your shipping labels are correct, and bundling works as expected.
    </p>

    <p>
      Many sellers don’t realize something’s off until after a purchase, when shipping costs have already been charged. Most issues, like unexpected fees or missed bundles, can be avoided by choosing the right settings upfront.
    </p>

    <h2>On this page:</h2>
    <ul>
      <li>How shipping settings work</li>
      <li>Set your default shipping options in Seller Hub</li>
      <li>Update shipping settings for a live show</li>
      <li>Choose a shipping profile for your product</li>
      <li>Make a shipping adjustment after purchase</li>
    </ul>

    <h3>How shipping settings work</h3>
    <p>
      There are two main ways to manage shipping on <strong>WhatNew</strong>:
    </p>
    <ul>
      <li><strong>Seller Hub settings:</strong> Your default shipping options for products and shows.</li>
      <li><strong>Show settings:</strong> Overrides you can set when scheduling a show.</li>
    </ul>

    <p>
      Each product you sell also uses a shipping profile based on its weight or category. Profiles work within the shipping options you’ve enabled in Seller Hub and your show settings.
    </p>

    <p className="note">
      <strong>Note:</strong> In some cases, WhatNew may apply a domestic shipping method automatically based on the item type. For example, USPS Media Mail may be used for items in Books, Music, or similar categories, even if it’s not shown as an option in your shipping settings.
    </p>

    <h3>Set your default shipping options in Seller Hub</h3>
    <p>
      Your default settings apply to your listings and shows, but the shipping method may still vary based on the item’s weight, category, or show-specific overrides.
    </p>

    <p>
      If you update your settings and already have live shows scheduled, you can choose whether to apply the changes to those shows.
    </p>

    <p>From Seller Hub, you can control:</p>
    <ul>
      <li>Whether to offer free pickup for local buyers</li>
      <li>Which domestic shipping options to enable (varies by region)</li>
      <li>Who pays for shipping (buyers by default, or you can offer partial or free shipping)</li>
      <li>Whether to use custom shipping profiles for certain items</li>
    </ul>

    <p>
      Learn more about domestic shipping options in your region: <strong>US, UK, Germany, France, Australia, Netherlands, Austria.</strong>
    </p>

    <h4>To update your Seller Hub shipping settings:</h4>
    <p className="note">
      <strong>Note:</strong> This feature is only available on the WhatNew app, not on whatnew.com.
    </p>

    <ol>
      <li>Open the WhatNew app</li>
      <li>Tap <strong>Seller Hub</strong> at the bottom of the screen</li>
      <li>Tap the menu icon (☰) in the top right</li>
      <li>Scroll down and select <strong>Shipping</strong></li>
      <li>Review your settings and edit if needed</li>
      <li>(Optional) Choose whether to apply changes to scheduled shows</li>
      <li>Save your changes</li>
    </ol>

    <p>You can edit these settings again at any time.</p>

    <h3>Update shipping settings for a live show</h3>
    <p>
      By default, your live shows will use the settings from your Seller Hub, but you can customize shipping settings for specific shows.
    </p>

    <p>For each show, you can choose:</p>
    <ul>
      <li>Whether to offer free pickup</li>
      <li>Which shipping methods to enable</li>
      <li>Who pays for shipping</li>
    </ul>

    <h4>To set shipping settings for a new show:</h4>
    <ol>
      <li>Open the WhatNew app</li>
      <li>Tap <strong>Seller Hub</strong> at the bottom of the screen</li>
      <li>Select <strong>Schedule a Show</strong></li>
      <li>Scroll down to <strong>Shipping Settings</strong></li>
    </ol>

    <p>
      These changes apply only to that show. If it’s a recurring show, the settings carry over to future instances. You can also edit these settings for any shows you’ve already scheduled.
    </p>

    <h3>Choose a shipping profile for your product</h3>
    <p>
      Each time you list a product, you’ll choose a shipping profile that helps determine how the item ships and how much shipping costs. Shipping profiles work within the options you’ve enabled in your shipping settings.
    </p>

    <p>
      WhatNew will automatically suggest profiles for your product based on the item’s weight or category. You can use the suggestions, or create a custom shipping profile if you want more control (like specific weight, dimensions, or max bundling).
    </p>

    <p>
      Always weigh your items (including packaging) and choose an accurate shipping profile. The wrong profile can lead to overcharging buyers, added costs for you, or delivery issues.
    </p>

    <h4>To choose a shipping profile for a new listing:</h4>
    <ol>
      <li>Open the WhatNew app</li>
      <li>Tap <strong>Seller Hub</strong> at the bottom of the screen</li>
      <li>Select <strong>Create a Product</strong></li>
      <li>Scroll down to <strong>Shipping Profile</strong></li>
      <li>Select from Suggested or Custom profiles you’ve created</li>
    </ol>

    <p>You can also edit the shipping profile for any active listings in your shop.</p>

    <h3>Make a shipping adjustment after purchase</h3>
    <p>
      If your package details were incorrect or changed after purchase, you can make a shipping adjustment before you ship.
    </p>

    <p>
      This creates or replaces your label based on the updated details. It’s a helpful backup, but reviewing your settings ahead of time can help you avoid last-minute fixes and unexpected shipping costs.
    </p>
  </div>
</div>



{/* ===== Seller Getting Started Section ===== */}
<div className="seller-gettingstarted-section">
  <h2 className="seller-gettingstarted-title">Articles in this section</h2>

  <div className="seller-gettingstarted-card">
    <div className="seller-gettingstarted-links">
      <a href="/how-to-start-selling" className="seller-gettingstarted-link">
        How Do I Start Selling?
      </a>
      <a href="/seller-application-faq" className="seller-gettingstarted-link">
        Seller Application FAQ
      </a>
      <a href="/set-up-shipping" className="seller-gettingstarted-link">
        Set Up Shipping Settings Before You Sell
      </a>
      <a href="/list-your-items" className="seller-gettingstarted-link">
        How to List Your Items on WhatNew: A Guide for New Sellers
      </a>
      <a href="/sales-match-bonus" className="seller-gettingstarted-link">
        The New Seller Sales Match Bonus
      </a>
      <a href="/submit-request" className="seller-gettingstarted-link">
        Submit A Request
      </a>
      <a href="/user-guide" className="seller-gettingstarted-link">
        WhatNew User Guide
      </a>
    </div>
  </div>
  </div>
     
    </div>
  );
}
