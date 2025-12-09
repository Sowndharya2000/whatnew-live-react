import React from "react";
import "./Show.css";

import Header1 from "../components/Header1"; 

export default function ShowmanagementForSellers() {
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
          <h1>Show management for WhatNew Sellers</h1>
          <p>WhatNew Support June 24, 2025 at 6:28 AM</p>
        </div>
      </div>

 {/* ===== Show Management Overview Section ===== */}
<div className="show-management-overview-section">
  <div className="show-management-overview-content">
    <h2>Overview</h2>
    <p>
      Show management makes it easy for sellers like you (as well as your co-hosts and moderators) to manage activities during your show on WhatNew. By ensuring you and your team never miss crucial notifications or events during your shows, these features make it easier for you to engage with your audience and boost your sales. Here’s a breakdown of how these features work:
    </p>

    <h3>1. Viewer List</h3>
    <p>
      Wondering who’s tuned in to your show? The viewer list provides a clear and organized view, divided into three sections: <strong>Friends</strong>, <strong>Host & Mods</strong>, and <strong>Top Buyers</strong>. You can toggle between the “Watching” and “Activity” tabs to see who’s watching and what they’re doing — whether they’re raiding, following, winning auctions, or leaving tips. Get real-time insights into your audience and tailor your interactions accordingly. Available to sellers, co-hosts, and mods.
    </p>

    <h3>2. Show Stats</h3>
    <p>
      Bid farewell to constant Seller Hub refreshing! With show stats integrated directly into your show view, you have instant access to your show’s numbers. Your orders and sales are tracked for you in real-time – that way you can focus on delivering a great show experience for your viewers (rather than trying to calculate totals in your head). Available to sellers and co-hosts.
    </p>

    <h3>3. Chat Filters</h3>
    <p>
      Managing a bustling chat is easier with chat filters. We’ve included filters like <strong>Questions</strong>, <strong>Buyers</strong>, <strong>Mods</strong>, and <strong>Muted messages</strong> to help you spot important messages and maintain control over discussions in your show. Available to sellers, co-hosts, and mods.
    </p>

    <h2>How to Access</h2>
    <p>
      Here’s where you’ll find these features during one of your shows:
    </p>

    <ul>
      <li><strong>Chat filters:</strong> Tap the caret (^) in the top left corner of chat.</li>
      <li><strong>Viewer list and show stats:</strong> Tap the viewer count in the upper right corner.</li>
    </ul>

    <p>
      These features are available globally on all platforms – Android, iOS, and Web. Ensure your app is updated to the latest version. Happy selling!
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
