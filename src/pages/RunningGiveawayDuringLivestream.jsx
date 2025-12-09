import React from "react";
import "./Running.css";

import Header1 from "../components/Header1"; 

export default function Running() {
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
          <h1>Running a Giveaway During a Livestream</h1>
          <p>WhatNew Support June 24, 2025 at 6:28 AM</p>
        </div>
      </div>

{/* ===== Running a Giveaway Section ===== */}
<div className="running-giveaway-section">
  <div className="running-giveaway-content">
 
    <p>
      This article discusses how to run a giveaway during your livestream.
    </p>
    <p>
      Running giveaways allows you to give away items for free to your livestream viewers. Giveaways can be used to show gratitude to your followers and can also help keep people engaged in your stream.
    </p>

    <h3>About Running Giveaways</h3>
    <p>
      Giveaways run for five minutes to allow users to enter. You can wait for the time limit to run the giveaway, or you can run it early. Winners are selected by the app using a randomizer and shown on your stream for all viewers.
    </p>
    <p>
      You can’t pause or cancel a giveaway once it’s run, so be sure you’re ready before choosing to run one.
    </p>
    <p>
      Visit <strong>Giveaways Overview</strong> for giveaway guidelines and frequently asked questions.
    </p>

    <h3>Running a Giveaway on Mobile</h3>
    <ul>
      <li>Open your livestream on your mobile device.</li>
      <li>Tap the <strong>Store</strong> icon at the bottom right-hand side of your screen. </li>
      <img src="assets/store.png"></img>
      <li>Tap on the <strong>Giveaway</strong> tab. </li>
       <img src="assets/Giveaway.png"></img>
      <li>Tap on a listing, then tap <strong>Start</strong> (on iOS) or <strong>Start Giveaway</strong> (on Android). This will pin the giveaway to your livestream, at which time users can enter the giveaway.</li>
        <img src="assets/start.png"></img>
      <li>Confirm that you want to run the giveaway by tapping <strong>Got it!</strong> If you don’t want to see this window again, tap the “Don’t show this next time” radio button.</li>
      <li>Tap <strong>Draw Winner</strong></li>
       <img src="assets/Draw.png"></img>
      <li>OR wait until the five-minute time limit is reached. Once the time limit is reached, the winner will be drawn automatically.</li>
    </ul>

    <h3>Running a Giveaway on Web</h3>
    <ul>
      <li>Open your livestream in your web browser.</li>
      <li>Select the <strong>Giveaways</strong> tab in the left panel. </li>
      <li>Click the <strong>Product Actions</strong> button under the giveaway you want to run. </li>
      <li>Select <strong>Start Giveaway</strong></li>
       <img src="assets/web.png"></img>
      <li>Confirm that you want to run the giveaway by selecting <strong>Start</strong>. If you don’t want to see this window again, click the “Don’t show this again” checkbox.</li>
      <li>Wait for users to enter your giveaway, then select <strong>Draw Winner</strong>.</li>
      <li>OR wait until the five-minute time limit is reached. Once the time limit is reached, the winner will be drawn automatically.</li>
    </ul>

    <h3>Additional Resources</h3>
    <ul>
      <li>Giveaways Overview</li>
      <li>Adding Standard Giveaways</li>
      <li>Adding Buyer Appreciation Giveaways</li>
      <li>Entering a Buyer Appreciation Giveaway</li>
      <li>Entering a Standard Giveaway</li>
    </ul>
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
