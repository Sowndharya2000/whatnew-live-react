import React from "react";
import "./SupportSystem.css";
import Header1 from "../components/Header1"; 

export default function MobileNotification() {
  return (
    <div>
      <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> /{" "}
            <a href="/account">Account</a> / <span>Manage Your Account</span>
          </nav>
          <h1>WhatNew Support System</h1>
          <p>WhatNew Support July 17, 2025 at 7:24 PM</p>
        </div>
      </div>

      {/* ===== Support Help Section ===== */}
      <div className="support-section">
        <div className="support-content">
          {/* ===== Header Section ===== */}
          <h1>Need more help?</h1>
          <p>
            If you didn’t find what you need in the Help Center, here’s how to
            get support from our team.
          </p>

          {/* ===== Table of Contents ===== */}
          <h2>On this page:</h2>
          <ul>
            <li>Buyers: Get help with an order</li>
            <li>Sellers: Get quick help or support with an order</li>
            <li>Get help with your account or other issues</li>
            <li>After you contact us</li>
          </ul>

          {/* ===== Buyers Section ===== */}
          <h2>Buyers: Get help with an order</h2>
          <p>
            If something’s wrong with your order, you can request help through
            the app or website.
          </p>

          <h3>In the WhatNew app:</h3>
          <ol>
            <li>Tap <strong>Activity</strong> at the bottom of the screen</li>
            <li>Go to <strong>Purchases</strong></li>
            <li>Tap the order you need help with</li>
            <li>Choose <strong>Get help with this purchase</strong></li>
            <li>Select the option that best matches your issue</li>
          </ol>

          <h3>On WhatNew.com:</h3>
          <ol>
            <li>Sign in to <strong>WhatNew.com</strong></li>
            <li>Click the <strong>Activity</strong> icon in the top right</li>
            <li>Click the <strong>Purchases</strong> tab</li>
            <li>Find and click the order you need help with</li>
            <li>
              Scroll down and select <strong>Get help with this purchase</strong>
            </li>
            <li>Select the option that best matches your issue</li>
          </ol>

          <p className="note">
            Sharing clear evidence helps resolve things more quickly.
          </p>

          <h3>Looking for a refund?</h3>
          <p>
            Start by following the steps above to get help with your order.
            We’ll review your request and let you know what happens next. You
            can also learn more about refund eligibility and how the process
            works.
          </p>

          {/* ===== Sellers Section ===== */}
          <h2>Sellers: Get quick help or support with an order</h2>
          <p>You can get help in two ways:</p>

          <h3>Option 1: Chat with WhatNew</h3>
          <p>
            WhatNew is our 24/7 messaging assistant on WhatNew.com. It can
            answer quick questions or connect you to the support team if needed.
          </p>
          <ol>
            <li>Sign in to <strong>WhatNew.com</strong></li>
            <li>Click your <strong>account icon</strong> in the top right</li>
            <li>From the <strong>Selling</strong> tab, open your Seller Hub</li>
            <li>Click <strong>Support Chat</strong> from the left menu</li>
          </ol>
          <p className="note">
            Note: WhatNew is a support tool, not a live agent. It can’t make
            decisions or commitments on behalf of WhatNew.
          </p>

          <h3>Option 2: Get help with an order</h3>
          <ol>
            <li>Open the WhatNew app</li>
            <li>Tap <strong>Seller Hub</strong> at the bottom of the screen</li>
            <li>Tap the menu icon (☰) in the top right</li>
            <li>Select <strong>Orders</strong></li>
            <li>Choose the order you need help with</li>
            <li>Tap <strong>Get help with this order</strong></li>
            <li>Select the option that best matches your issue</li>
          </ol>

          {/* ===== Account Issues Section ===== */}
          <h2>Get help with your account or other issues</h2>
          <p>For anything else, contact us from the app:</p>
          <ol>
            <li>Open the WhatNew app</li>
            <li>
              Tap the <strong>Account</strong> icon at the bottom of the screen
            </li>
            <li>Scroll down and tap <strong>Contact Us</strong></li>
            <li>Select the option that best matches your issue</li>
          </ol>

          {/* ===== After Contact Section ===== */}
          <h2>After you contact us</h2>
          <ul>
            <li>
              A team member will reach out to help, usually within 48 hours
            </li>
            <li>You’ll get a confirmation email with your ticket number</li>
            <li>
              Search your inbox for <strong>WhatNew Support</strong> if you
              don’t see the email
            </li>
          </ul>
        </div>
      </div>

   {/* ===== Account Management Section ===== */}
      <div className="account-manage-container">
        <h2 className="account-title">Manage Your Account</h2>

        <div className="account-card">
          <div className="account-links">
            <a href="/mobile-notifications" className="account-link">
              Setting up your Mobile App Notification Settings
            </a>
            <a href="/update-email-password" className="account-link">
              Update your Email and Password – Self Service
            </a>
            <a href="/multiple-accounts" className="account-link">
              Managing Multiple Accounts on WhatNew
            </a>
            <a href="/deleting-form" className="account-link">
              WhatNew Deleting Form
            </a>
            <a href="/support-system" className="account-link">
              WhatNew Support System
            </a>
          </div>
        </div>
      </div>
</div>
 
  );
}
