import React from "react";
import "./SellerApplicationFAQ.css";

import Header1 from "../components/Header1"; 

export default function SellerApplicationFAQ () {
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
          <h1>Seller Application FAQ</h1>
          <p>WhatNew Support June 20, 2025 at 8:25 PM</p>
        </div>
      </div>

      {/* ===== Seller Application FAQ Section ===== */}
<div className="seller-application-faq-section">
  <div className="seller-application-faq-content">
  
    <p>
      This article covers frequently asked questions related to the seller application process.
    </p>

    <h3>What do I need in order to apply to sell on WhatNew?</h3>
    <p>
      You will need a payment method, a return shipping address, as well as any additional information you wish to provide
      (direct links to your social media profiles and selling profiles are optional).
    </p>

    <h3>How long does the application to sell take to complete?</h3>
    <p>It takes around 5 minutes to complete the application.</p>

    <h3>When will I be approved to go live?</h3>
    <p>
      Please allow the Applications Team up to two weeks to review your application.
      If you do not receive a response within 2 weeks, please contact{" "}
      <a href="mailto:applications@whatnew.com">applications@whatnew.com</a> for a status update.
    </p>

    <h3>I applied to sell, but I want to change my username to my business name.</h3>
    <p>
      Please wait to update any account information until after your application is processed.
      Changing your username or email address during the application process could delay an application decision.
    </p>

    <h3>I applied to sell in Fun, but I also want to sell basketball cards. Do I have to apply again?</h3>
    <p>
      Once you are approved to sell on WhatNew, you can sell in any category except:
      <strong> Luxury Bags & Accessories</strong>, <strong>Surprise Sets in Sneakers & Streetwear</strong>,
      and <strong>Bags & Accessories</strong>. Selling in these categories requires additional approval.
      If you are interested, please reference this article.
    </p>

    <h3>I forgot to include my eBay link/social media profile/etc on my application. How can I add it?</h3>
    <p>
      Please reach out to{" "}
      <a href="mailto:applications@whatnew.com">applications@whatnew.com</a> with the information you’d like to add.
      Be sure to include the username and email address that you used on your application.
    </p>

    <h3>My friend got approved to sell in one day. Why is my application taking so long?</h3>
    <p>
      Depending on which category you applied for, there may be a slight backlog.
      Please allow the team up to two weeks to review your application.
      If you don’t receive a decision within that time, please contact{" "}
      <a href="mailto:applications@whatnew.com">applications@whatnew.com</a> for a status update.
    </p>

    <h3>I was approved to sell and did the Zoom info session, but my live access still isn’t on.</h3>
    <p>
      If your live access isn’t automatically enabled after your info session, please check your email.
      In most cases, the email address or username provided on the quiz does not match the one on your application.
    </p>

    <h3>I’m under 13, but still want to sell on WhatNew. Can you make an exception?</h3>
    <p>
      Unfortunately, no. You must be 13 years of age or older to use WhatNew.
      For those aged 13–17, we require permission and supervision from a parent or legal guardian aged 18 years or older
      to access the platform. Learn more about WhatNew’s requirements for teens.
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
