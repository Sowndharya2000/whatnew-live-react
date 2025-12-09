
// BannerSection.jsx
import React from "react";
import "./order.css";
import Header1 from "./Header1";

const Payment = () => {
  return (
    <>
    <Header1 />
      {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>General</span>
          </nav>
          <h1>Track your order
</h1>
          <p>WhatNew Support July 12, 2025 at 2:53 AM
.</p>
        </div>
      </div>

      {/* BNPL Section */}
      <div className="section-page">
  <div className="content-page">
    

    <h3>On this page:</h3>
    <ul>
      <li>Check your order status on WhatNew</li>
      <li>Track your package with the shipping carrier</li>
      <li>If your order is delayed or not delivered</li>
    </ul>

    <h3>Check your order status on WhatNew</h3>
    <p>
      Find out if your order is being prepared, shipped and in transit, or has been delivered.
    </p>

    <h4>Check your order status in the WhatNew app:</h4>
    <ol>
      <li>Open the WhatNew app</li>
      <li>Tap Activity</li>
      <li>From the Purchases tab, find and select the purchase</li>
      <li>The current status appears at the top of the screen</li>
    </ol>

    <h4>Check your order status on WhatNew.com:</h4>
    <ol>
      <li>Log in to WhatNew.com</li>
      <li>Click the Activity icon</li>
      <li>From the Purchases tab, find and select the purchase</li>
      <li>The current status appears at the top of the screen</li>
    </ol>

    <p>
      If your order hasn’t shipped yet, the seller may still be preparing the package. 
      We ask sellers to ship within 2 business days. Learn what to do if it’s delayed.
    </p>

    <h3>Track your package with the shipping carrier</h3>
    <p>
      Once your order ships, you’ll get tracking information and can open the carrier’s tracking page from WhatNew.
    </p>

    <p><strong>Tip:</strong> Tracking can take 24–48 hours to update after a label is created.</p>

    <h4>Track your package from the WhatNew app:</h4>
    <ol>
      <li>Open the WhatNew app</li>
      <li>Tap Activity</li>
      <li>From the Purchases tab, find and select the purchase</li>
      <li>Scroll down and tap Track your purchase</li>
    </ol>

    <h4>Track your package from WhatNew.com:</h4>
    <ol>
      <li>Log in to WhatNew.com</li>
      <li>Click the Activity icon</li>
      <li>From the Purchases tab, find and select the purchase</li>
      <li>Click Track your purchase</li>
    </ol>

    <p>
      Note: Some shipping methods, like USPS First-Class Mail, have limited tracking. 
      If you’re in the US, learn more about USPS shipping timelines. 
      You can still check the order status in WhatNew.
    </p>

    <h3>If your order is delayed or not delivered</h3>
    <p>
      You may be covered under our Buyer Protection Policy and eligible for a refund if your item is delayed or doesn’t arrive. 
      Here’s what to do depending on the situation:
    </p>

    <h4>If your order hasn’t shipped yet:</h4>
    <ul>
      <li>If the label hasn’t been created and it’s been more than a week, contact support.</li>
    </ul>

    <h4>If tracking hasn’t updated or looks stuck:</h4>
    <ul>
      <li>Tracking can take time to update after the label is created.</li>
      <li>Carriers don’t always scan at every stop.</li>
      <li>Your package may still be in transit even if tracking looks paused.</li>
    </ul>

    <h4>If your package hasn’t been delivered:</h4>
    <ul>
      <li>For domestic shipments, contact support if it’s been a couple of weeks since the last tracking update.</li>
      <li>For international shipments, contact support for help if it’s been over a month.</li>
    </ul>

    <p>
      When you contact us, our team will review the situation, help you figure out what’s going on, 
      and support you based on our protection policy.
    </p>
  </div>
</div>

   
    </>
  );
};

export default Payment;
