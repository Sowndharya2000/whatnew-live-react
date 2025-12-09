import React from "react";
import "./MobileNotification.css";
import Header1 from "../components/Header1"; 

export default function MobileNotification() {
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
          <h1>Setting up your Mobile App Notification Settings</h1>
          <p>WhatNew Support  June 13, 2025 at 4:54 AM</p>
        </div>
      </div>

      {/* ===== Main Notification Section ===== */}
      <div className="notification-section">
        <div className="notification-content">
          <p>
            The WhatNew mobile app allows you to choose when you’d like to
            receive push notifications on your iOS or Android device.
          </p>

          <h2>You can configure your settings to receive mobile notifications when:</h2>
          <ul>
            <li>A streamer you follow goes live.</li>
            <li>A stream you’ve bookmarked goes live.</li>
            <li>
              Anytime someone <strong>@mentions</strong> you in a livestream.
              You can also specify when you’d like to receive these notifications:
              from anyone who tags you, only people you follow who tag you, or never.
            </li>
            <li>Someone starts following you.</li>
          </ul>

          <p className="note">
            <strong>Note:</strong> Users are limited to how many times they can
            tag you in a given time frame. There are also limits to how many
            notifications you will receive when you are tagged multiple times in
            a livestream.
          </p>

          <h2>Setting your Notification Settings</h2>
          <ol>
            <li>Open the WhatNew app</li>
            <li>Tap the Account icon at the bottom of the screen</li>
            <li>Scroll down and tap <strong>Notifications</strong></li>
          </ol>

          <img
            src="/assets/ms.png"
            alt="Notification Settings Example"
            className="notification-image"
          />

          <p>Set your mobile notification preferences how you want them:</p>
          <ul>
            <li>Edit your Livestream Notifications</li>
            <li>Manage Saved Searches (if you have any)</li>
            <li>
              Tap <strong>Chat Tagging</strong> to update notifications for
              <strong>@mentions</strong> in live shows:
              <ul>
                <li><strong>Everyone (default):</strong> Notified anytime someone tags you in a livestream chat</li>
                <li><strong>Following only:</strong> Only notified when someone you follow tags you in a livestream chat</li>
                <li><strong>No one:</strong> Not notified about @ mentions in chat</li>
              </ul>
            </li>
            <li>
              Edit <strong>New Followers</strong> to turn notifications on or
              off when someone starts following you.
            </li>
          </ul>

          <h2>Live Show Settings from Sellers you Follow (for iOS)</h2>
          <p>
            Through the seller WhatNew profile, you have the option to select
            from the below notification preferences to choose what push
            notifications you receive when they go live:
          </p>
          <ul>
            <li>
              <strong>All Notifications:</strong> You’ll receive a push
              notification every time the seller goes live.
            </li>
            <li>
              <strong>Personalized Notifications:</strong> You’ll receive push
              notifications for the shows you’re likely to open based on past
              push notification open behavior. This is the default option.
            </li>
            <li>
              <strong>No Notifications:</strong> You won’t receive any push
              notifications when they go live unless you bookmark or save their
              shows.
            </li>
          </ul>

          <p>
            Tap on the bell icon at the top right of the seller’s profile to
            change settings.
          </p>

          <h2>How do I clear notifications?</h2>
          <p>
            To clear the notification icon / badge from the WhatNew app, make
            sure you’ve cleared both your DMs in the Activity Tab as well as
            Notifications in the bell icon. You have to clear both tabs to clear
            the badge.
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
