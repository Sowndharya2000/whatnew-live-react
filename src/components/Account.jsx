import React from "react";
import "./Account.css";
import Header1 from "./Header1";
const Account = () => {
  return (
    <>
    <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <span>Account</span>
          </nav>
          <h1>Account</h1>
         
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
    </>
  );
};

export default Account;
