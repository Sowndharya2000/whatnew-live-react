import React from "react";
import "./How.css";

import Header1 from "../components/Header1"; 

export default function HowToScheduleShow() {
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
          <h1>How to schedule a show</h1>
          <p>WhatNew Support June 24, 2025 at 6:28 AM</p>
        </div>
      </div>

 {/* ===== Scheduling a Show in Advance Section ===== */}
<div className="seller-schedule-show-section">
  <div className="seller-schedule-show-content">
    <p>
      Scheduling a show in advance gives you time to prepare your listings and promote the show.
      You can schedule a show from the <strong>WhatNew app</strong> or <strong>WhatNew.com</strong>.
      This article covers how to schedule, repeat, edit, or cancel a show.
    </p>

    <p>
      If plans change and you need to reschedule, you can easily edit your show’s date and time.
    </p>

    <h3>Schedule a Show on the App</h3>
    <ol>
      <li>Open the <strong>WhatNew app</strong>.</li>
      <li>Tap <strong>Seller Hub</strong> at the bottom of the screen.</li>
      <li>Select <strong>Schedule a Show</strong>.</li>
      <li>Name your show and set a date and time.</li>
      <li>(Optional) Add moderators by username.</li>
      <li>(Optional) Tap <strong>Repeat</strong> to schedule your show Daily, Weekly, or Monthly (only on iOS).</li>
      <li>(Optional) Add a thumbnail or preview video.</li>
    </ol>

   
    <p>
      If you don’t set a thumbnail, we’ll use your profile photo by default.
    </p>

    <h4>Select the Right Category</h4>
    <p>
      Choose a category that matches your show to increase discoverability.
      If you’re selling mixed products, select the primary category.
    </p>

    <h4>Choose a Primary Selling Format</h4>
    <ul>
      <li>Auction</li>
      <li>Buy It Now</li>
      <li>Surprise Sets</li>
    </ul>

    <h4>Optional Settings</h4>
    <ul>
      <li>Add Tags to help your show get discovered.</li>
      <li>Adjust Shipping Settings for this show.</li>
      <li>Set your Content Settings and Primary Language.</li>
      <li><strong>Explicit content:</strong> Flag if your stream includes strong language.</li>
      <li><strong>Mute words:</strong> Hide flagged words from chat.</li>
    </ul>

    <p className="note">
       Tip: Check WhatNew’s <strong>Community Guidelines</strong> to ensure your content follows the rules.
    </p>

    <h4>Set Show Discoverability</h4>
    <ul>
      <li><strong>Public:</strong> Discoverable by everyone.</li>
      <li><strong>Private:</strong> Only accessible through shared links — great for test shows.</li>
    </ul>

    <h3>Edit or Cancel a Show (on App)</h3>
    <ol>
      <li>From Seller Hub, open your scheduled show.</li>
      <li>Tap the <strong>More (⋯)</strong> icon.</li>
      <li>Select <strong>Edit Show</strong> or <strong>Cancel Show</strong>.</li>
    </ol>

    <h3>Start Your Show and Go Live</h3>
    <ol>
      <li>From Seller Hub, open your scheduled show.</li>
      <li>Tap <strong>Start Show</strong>.</li>
    </ol>

    <h3>Schedule a Show on WhatNew.com</h3>
    <ol>
      <li>Log in to <strong>WhatNew.com</strong>.</li>
      <li>Click your account icon (top right).</li>
      <li>From the <strong>Selling</strong> tab, open <strong>Seller Hub</strong>.</li>
      <li>Go to the <strong>Shows</strong> page.</li>
      <li>Click <strong>Schedule a Show</strong>.</li>
      <li>Name your show and set a date and time.</li>
      <li>(Optional) Set it to repeat Daily, Weekly, or Monthly.</li>
      <li>Select your Category and Selling Format.</li>
      <li>(Optional) Add Tags, moderators, thumbnails, or preview videos.</li>
      <li>Adjust Shipping, Content, and Language settings.</li>
    </ol>

 
    <h3>Edit or Cancel a Show (on Website)</h3>
    <ol>
      <li>From Seller Hub, open the <strong>Shows</strong> page.</li>
      <li>Find your scheduled show.</li>
      <li>Click <strong>Edit Show</strong> or <strong>Cancel Show</strong>.</li>
    </ol>

    <h3>Start Your Show and Go Live (on Website)</h3>
    <ol>
      <li>From Seller Hub, open the <strong>Shows</strong> page.</li>
      <li>Find your show and click <strong>Open Show</strong>.</li>
      <li>Click <strong>Start Stream</strong>.</li>
    </ol>
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
