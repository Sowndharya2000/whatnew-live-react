// BannerSection.jsx
import React from "react";
import "./Payment.css";
import Header1 from "./Header1";

const Payment = () => {
  return (
    <>
    {/* ====== Header Section ====== */}
      <Header1 />

      {/* Banner Section */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>General</span>
          </nav>
          <h1>Pay over time with Buy Now, Pay Later
</h1>
          <p>WhatNew Support June 19, 2025 at 7:33 AM.</p>
        </div>
      </div>

      {/* BNPL Section */}
      <div className="bnpl-section">
      
        <div className="bnpl-content">
        

          <p>
            <strong>Need help with payment options or issues?</strong> 
            <p>Try managing payment methods or fixing a payment error.</p>
          </p>

          <h3>When Buy Now, Pay Later is available</h3>
          <ul>
            <li>You're using the WhatNew app (iOS or Android)</li>
            <li>You're purchasing a Buy It Now (BIN) item</li>
            <li>The item meets the minimum price:
              <ul>
                <li>Klarna: ₹10 or more</li>
                <li>Affirm: ₹50 or more (US only)</li>
              </ul>
            </li>
            <li>The item isn’t in a restricted category:
              <ul>
                <li>Klarna: Not available for Knives & Hunting</li>
                <li>Affirm: Not available for Coins & Money, Coins & Bullion, Paper Money & Currency, or Knives & Hunting</li>
              </ul>
            </li>
            <li>You're located in a supported region:
              <ul>
                <li>Klarna: US, UK, Canada, Austria, Belgium, Germany, France, Netherlands</li>
                <li>Affirm: US only</li>
              </ul>
            </li>
          </ul>

          <p><strong>Note:</strong> BNPL isn’t available for purchases made on WhatNew.com.</p>

          <h3>How to use Buy Now, Pay Later</h3>
          <ol>
            <li>Tap Buy Now on an eligible item in the WhatNew app</li>
            <li>Go to the Payment section and expand if collapsed</li>
            <li>Under “Pay for this item over time”, choose Klarna or Affirm</li>
            <li>Tap Continue with Klarna / Affirm</li>
            <li>If prompted, enter your payment information</li>
            <li>Tap Pay [amount] to continue to Klarna or Affirm</li>
            <li>Enter your Klarna or Affirm account info</li>
            <li>Choose a payment plan</li>
            <li>Review your plan details and confirm your purchase</li>
          </ol>

          <p>After checkout, you can view your order details in the <strong>Purchases</strong> tab on WhatNew.</p>

          <h3>Refunds</h3>
          <p>
            If your order qualifies for a refund under our <strong>Buyer Protection Policy</strong>, and your request is approved, Klarna or Affirm will update your payment schedule and/or issue a refund based on how much you’ve already paid.
          </p>

          <h3>FAQs</h3>
          <ul>
            <li><strong>Why don’t I see BNPL as an option?</strong> Your purchase may not be eligible.</li>
            <li><strong>Why am I seeing a recurring charge from WhatNew?</strong> If you used Klarna or Affirm, it might be an installment payment. You can view your payment plan from your Klarna or Affirm account.</li>
            <li><strong>Will BNPL affect my credit score?</strong> It depends on the provider and the payment plan. Visit Klarna or Affirm to learn more.</li>
            <li><strong>Can I change the payment method I used for BNPL?</strong> No. You cannot change the payment method on WhatNew once confirmed.</li>
            <li><strong>Need more help?</strong> Contact WhatNew support, Klarna customer service, or Affirm customer care.</li>
         </ul>
        </div>
      </div>
    </>
  );
};

export default Payment;
