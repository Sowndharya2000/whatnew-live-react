import React from "react";
import "./AdultExplicitPolicy.css";

import Header1 from "../components/Header1"; 

export default function AdultExplicitPolicy() {
  return (
    <div>
        <Header1 />
      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
           <a href="/Faq">WhatNew</a> /
      <a href="/safety-policy">Safety & Policy</a> /{"General "}
          </nav>
          <h1>Adult & explicit items policy</h1>
          <p>WhatNew Support May 16, 2025 at 7:29 AM</p>
        </div>
      </div>

   {/* ===== Adult & Explicit Items Policy Section ===== */}
<div className="adult-items-policy-section">
  <div className="adult-items-policy-content">
  
    <p>
      We want to encourage expression and commerce opportunities on <strong>WhatNew</strong>, 
      while still ensuring others aren’t shocked or negatively impacted, especially considering 
      the diversity of ages and cultural backgrounds on WhatNew.
    </p>

    <p>
      While we prohibit most adult items, there are some items containing nudity that we allow 
      with the <strong>Sensitive Content</strong> toggle provided there is no nudity visible 
      outside of the relevant show, as set out below.
    </p>

    <h3>Prohibited Adult Items</h3>
    <p>
      WhatNew prohibits the display, giveaway, or sale of items that are meant to sexually 
      stimulate or satisfy, including the following:
    </p>
    <ul>
      <li>
        Items containing sexually explicit content, including pornography or sexually explicit 
        video games (including items rated X, XXX or unrated for adults-only audiences).
      </li>
      <li>
        Sexual or romantic services, including sex work, escort services (in-person or virtual dates), 
        filmed sexual activity, or access/credentials to adult content.
      </li>
      <li>
        Fetish items, including items that have been intimately used or custom photographs with 
        sexual content or sexualized body parts.
      </li>
      <li>
        Sex toys, sexual massagers, sexual enhancement items, condoms, lubricants, and other 
        items intended for use during sexual activity.
      </li>
      <li>
        Nude photography that is not fine art, educational, or journalistic material.
      </li>
      <li>
        AI-generated or doctored nude images of public figures.
      </li>
      <li>
        Any item sexualizing minors in any way, whether real or fictionalized.
      </li>
    </ul>

    <h3>Items Allowed with Sensitive Content Toggle</h3>
    <p>
      WhatNew permits the display, giveaway, or sale of the following provided the 
      <strong> Sensitive Content</strong> toggle is on and there is no nudity visible in 
      listings, previews, thumbnails, profile content, or otherwise outside of a show 
      tagged as sensitive content:
    </p>
    <ul>
      <li>
        Nude photography only if it is fine art, educational, or journalistic material, 
        and it is not sexually explicit.
      </li>
      <li>
        Non-photographic, unrealistic, fictional depictions of nudity are permitted provided 
        they are not sexually explicit. Disallowed sexually explicit content includes nudity 
        where the focal point is exposed genitalia (even if covered digitally or physically). 
        This includes comics, cards, manga, and books.
      </li>
      <li>
        Adult magazines that contain photographs of nudity are permitted to be sold if they 
        don’t contain any sex acts and no nudity is displayed in the show (e.g., <em>Playboy</em>).
      </li>
      <li>
        Statues and other 3D renderings of genitalia, provided they are not being sold as a 
        sex toy or otherwise for sexual gratification. This includes crystals, statues, 
        crocheted items, and other crafts.
      </li>
    </ul>

    <p>
      See WhatNew’s <strong>Explicit Content Policy</strong>
      for our rules around user activity on stream or otherwise.
    </p>
  </div>
</div>

{/* ===== General Policies Listing Section ===== */}
<div className="general-policies-listing-section">
  <h2 className="general-policies-listing-title">Articles in this section</h2>

  <div className="general-policies-listing-card">
    <div className="general-policies-listing-links">
      <a href="/adult-explicit-items-policy" className="general-policies-listing-link">
        Adult & Explicit Items Policy
      </a>
      <a href="/animal-related-policy" className="general-policies-listing-link">
        Animal Related Policy
      </a>
     <a href="/communication-scams-policy" className="general-policies-listing-link">
        Avoiding Communication Scams on WhatNew
      </a>
      <a href="/blocking-user" className="general-policies-listing-link">
        Blocking a User
      </a>
      <a href="/cad-faq" className="general-policies-listing-link">
        CAD FAQ
      </a>
      <a href="/report-form" className="general-policies-listing-link">
        WhatNew Report Form
      </a>
    </div>
  </div>
</div>




     
    </div>
  );
}
