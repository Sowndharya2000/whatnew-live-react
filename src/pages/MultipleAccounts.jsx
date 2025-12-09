import React from "react";
import Header1 from "../components/Header1"; 
import "./MultipleAccounts.css";
export default function AboutUs() {
  return (
     <div>
   <Header1 />
       {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">WhatNew</a> /
      <a href="/account">Account</a> /{"Manage Your Account "}
          </nav>
          <h1>Managing Multiple Accounts on WhatNew</h1>
          <p>WhatNew Support  June 13, 2025 at 4:54 AM</p>
        </div>
      </div>


{/* ===== Adding and Managing Accounts Section ===== */}
<div className="account-management-section">
  <div className="account-management-content">
    <h2>Adding and Managing Accounts</h2>
    <p>
      You can now add up to <strong>8 WhatNew buyer accounts</strong> and quickly switch between them without having to log out and log back in, but you can only sell on one of these accounts. 
      If you try to obtain selling access on a secondary account, you will be blocked from doing so, unless you meet the criteria listed at the end of this article.
    </p>

    <p>
      To create new buyer accounts, we recommend leveraging the <strong>Account Switcher</strong>, which makes it easy to create and swap between your multiple buyer accounts.
    </p>

    <h3>How to Add Multiple Accounts</h3>
    <ol>
      <li>From your profile, tap the ‘▼’ icon next to your username.</li>
      <li>Tap <strong>‘Add existing account’</strong> to log into another account, or</li>
      <li>Tap <strong>‘Create a new account’</strong> if you need a new one.</li>
    </ol>
    <p><strong>Remember:</strong> You can only have seller access on <strong>ONE</strong> of these accounts.</p>

    <h3>Switch Between Accounts</h3>
    <ol>
      <li>On your profile, tap the ‘▼’ icon next to your username.</li>
      <li>Tap the account you’d like to switch to.</li>
    </ol>

    <h3>Remove Accounts</h3>
    <ol>
      <li>On your profile, tap the ‘▼’ icon next to your username.</li>
      <li>Tap <strong>‘Manage’</strong>.</li>
      <li>
        Tap <strong>‘Sign Out’</strong> of the desired account. 
        <em>Note: If you log out of your active account, you will automatically transition to the next stored account.</em>
      </li>
    </ol>

    <h3>Notifications</h3>
    <p>
      You will receive push notifications only for the currently active account. 
      When you switch to another account, push notifications from the previous account will be cleared.
    </p>

    <h3>FAQs</h3>
    <ul>
      <li>
        <strong>Can I merge or combine two or more accounts into one?</strong><br />
        No. Currently, we do not offer a way to merge multiple accounts into one or migrate data from one account to another.
      </li>
      <li>
        <strong>Why is there no button in my profile to open the Account Switcher?</strong><br />
        This feature is supported for iOS only and is being rolled out gradually. 
        It may not be available for you yet. Try updating your app and stay tuned!
      </li>
      <li>
        <strong>Will this feature allow more people to abuse giveaways?</strong><br />
        You have to be in the livestream once entered into a giveaway to be eligible at the time the drawing happens. 
        If you switch to a different account on the same device, your other account is no longer active or in the livestream and is removed from the drawing. 
        This does not enable a user to enter giveaways multiple times.
      </li>
    </ul>

    <h3>Multiple Seller Accounts Guidelines</h3>
    <p>
      If you’re currently a WhatNew seller, running streams on a second account is a great way to grow your brand and host multiple streams simultaneously, or to grow a following in a different category. 
      At this time, we are only allowing established sellers who’ve demonstrated consistency and reputability to have a second seller account based on the following criteria:
    </p>
    <ul>
      <li>Seller must have lifetime sales of more than ₹100k (before fees) OR more than 1000 orders.</li>
      <li>Seller must have hosted at least 10 livestreams in the last 30 days.</li>
      <li>Seller must have above a 4.8 rating. Your rating is most heavily influenced by whether you are shipping on time and packaging according to our guidelines so there is no damage.</li>
      <li>Seller should not be on second offense in any violation category of our What Actions We Take guidelines.</li>
    </ul>

    <p>
      If you meet this criteria and are interested in a second account for the stated reasons, 
      please reach out to <a href="mailto:applications@whatNew.com">applications@whatNew.com</a>.
    </p>

    <p className="note">
      <strong>Note:</strong> Verified badges and early payout privileges are not transferable between accounts. 
      These will need to be re-earned on your new selling account.
    </p>
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