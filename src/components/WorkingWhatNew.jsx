import React, { useState, useEffect } from "react";
import "./Working.css";

import Header2 from "../components/Header2";

export default function AboutUs() {
  return (
    <div>
      <Header2 />
  <div class="Working">
    <h1>Where passion meets persistence.</h1>
    <p>Build alongside the best as we help our community make a living doing what they love.</p>
  </div>

  {/* ---------------------- SECTION 2: CULTURE & QUOTES ---------------------- */}
      <section className="working-section">
        <h2>Set a new pace at Whatnew.</h2>
        <p>
          Do the best work of your career as we redefine commerce, expand into
          new markets, and set a pace others can’t match.
        </p>

        <div className="working-quotes">
          <blockquote>
            <p>
              “I love the passion and risk taking that happens here. When I’m
              here I feel like I’m constantly discovering what’s actually possible.”
            </p>
            <footer>— Laura Rothman, Senior Engineering Manager</footer>
          </blockquote>

          <blockquote>
            <p>
              “You have to possess a strong work ethic and a ton of humility 
              to thrive here.”
            </p>
            <footer>— Pierre Tettart, General Manager</footer>
          </blockquote>

          <blockquote>
            <p>
              “Because of Whatnew I’ve never been more comfortable being
              uncomfortable. I have total faith that whatever the task is,
              I'll figure it out.”
            </p>
            <footer>— Elisha Fronda, Influencer Marketing</footer>
          </blockquote>
        </div>
      </section>


 
    </div>
  );
}
