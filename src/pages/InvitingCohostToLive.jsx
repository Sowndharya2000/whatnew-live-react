import React from "react";
import "./Inviting.css";

import Header1 from "../components/Header1"; 

export default function Inviting() {
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
          <h1>Inviting a Co-host to your Live</h1>
          <p>WhatNew Support June 24, 2025 at 6:28 AM</p>
        </div>
      </div>

{/* ===== Inviting a Co-Host Section ===== */}
<div className="inviting-cohost-section">
  <div className="inviting-cohost-content">
   

    <p>
      This article outlines how to invite a user to co-host your live. A co-host joins the live and streams their video as well as your own live feed!
    </p>

    <p className="note">
      <strong>Note:</strong> Only the account directly invited by the stream’s host can be a co-host.
    </p>

    <h3>How to Invite a Co-host</h3>
    <ul>
      <li>Once you are hosting a live show, select the username of the person you’d like to co-host with you.</li>
      <img src="assets/Cohost.png" alt="Select username to co-host" />
      <li>Select <strong>“Invite to co-host”</strong>.</li>
      <img src="assets/Confirm.png" alt="Confirm co-host invite" />
      <li>
        When inviting a co-host on the web platform, the co-host must be on an Android or iOS device. For now, when co-hosting from web, you will not be able to hear or see your co-host.
      </li>
      <li>
        The user will receive a banner notification giving them the chance to accept or deny the co-host invitation.
      </li>
      <img src="assets/Cohost invitation.PNG" alt="Co-host invitation banner" />
    </ul>

    <h3>Co-Hosting Post Live</h3>
    <p className="note">
      <strong>Note:</strong> The original host is responsible for all the orders sold in the live show. If there is an issue with an order, the original host’s account will be linked to that order. However, both accounts are subject to investigation and potential account action by our Trust & Safety teams if our community guidelines are not followed.
    </p>

    <h3>Who Fulfills the Orders from a Co-Hosted Live Show?</h3>
    <p>
      All orders made during a co-hosted live are the responsibility of the original host. All shipping labels are provided to the original host of the stream within the Seller Hub and not the co-host.
    </p>
    <p>
      If a co-host has items from their inventory sold during a live show, it is the responsibility of the original host to provide the shipping labels to the co-host and ensure the items are shipped.
    </p>

    <h3>How to Send Labels to the Co-Host</h3>
    <ul>
      <li>Once the live show is over, all labels will be present in the original host’s Seller Hub.</li>
      <li>The original host should be able to generate the labels within their Seller Hub by selecting the show in which the co-host was present.</li>
      <li>The host can download and email selected labels to the co-host.</li>
      <li>
        <strong>Note:</strong> Any label sent to the co-host will have the original host’s address as the return address. If an item is returned or undeliverable, it will be sent back to the original host.
      </li>
    </ul>

    <h3>Who Gets the Payout for the Orders Sold on a Co-Hosted Live?</h3>
    <p>
      The original seller will receive all the funds from the show regardless of who shipped out the order.
    </p>

    <h3>If I Was the Co-Host and Have Items That Were Sold in the Live</h3>
    <p>
      The co-host will need to get the shipping labels from the original host, as all labels are located in the original host’s Seller Hub.
    </p>

    <h3>Can the Co-Host Sell Items in Their Marketplace?</h3>
    <p>
      No. If the co-host wants to sell items during the show, they must have the original seller list those items as part of their inventory prior to the show, or use the “Create Temporary Listing” feature during the stream.
    </p>
  </div>
</div>






{/* ===== Live Show Resources Section ===== */}
<div className="live-show-section">
  <h2 className="live-show-title">Articles in this section</h2>

  <div className="live-show-card">
    <div className="live-show-links">
      <a href="/how-to-schedule-a-show" className="live-show-link">
        How to Schedule a Show
      </a>
      <a href="/prohibited-or-restricted-items" className="live-show-link">
        Prohibited or Restricted Items on WhatNew
      </a>
      <a href="/show-management-for-sellers" className="live-show-link">
        Show Management for WhatNew Sellers
      </a>
      <a href="/running-a-giveaway-during-livestream" className="live-show-link">
        Running a Giveaway During a Livestream
      </a>
      <a href="/inviting-a-cohost-to-your-live" className="live-show-link">
        Inviting a Co-host to Your Live
      </a>
    </div>
  </div>
</div>




     
    </div>
  );
}
