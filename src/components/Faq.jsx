import React from "react";
import "./Faq.css";
import Header1 from "./Header1";

const InfoContainer = () => {
  return (
   
    <div className="info-main">
      <Header1 />
      {/* Row 1: Buying + Selling */}
      <div className="info-row">
        <div className="info-box">
          <a href="/buying" className="info-link">Buying</a>
        </div>
        <div className="info-box">
          <a href="/selling" className="info-link">Selling</a>
        </div>
      </div>

      {/* Row 2: Account + Safety & Policy */}
      <div className="info-row">
        <div className="info-box">
          <a href="/account" className="info-link">Account</a>
        </div>
        <div className="info-box">
          <a href="/safety-policy" className="info-link">Safety & Policy</a>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
