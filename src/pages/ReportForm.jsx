import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ReportForm.css";
import Header1 from "../components/Header1";

export default function ReportForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7khbqv2",   // Replace with your EmailJS Service ID
        "template_5asdasz",  // Replace with your EmailJS Template ID
        form.current,
        "J_NJn0m-hM_XMVbUC"  // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div>
      {/* ===== Header Section ===== */}
      <Header1 />

      {/* ===== Banner Section (unchanged) ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <a href="/safety-policy">Safety & Policy</a> /{" "}
            <span>Report Form</span>
          </nav>
          <h1>WhatNew Report Form</h1>
          <p>WhatNew Support May 16, 2025 at 7:29 AM</p>
        </div>
      </div>

      {/* ===== Report Form Section ===== */}
      <div className="report-form-section">
        <form ref={form} onSubmit={sendEmail} className="report-form-container">
          <label htmlFor="name" className="report-form-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="report-form-input"
          />

          <label htmlFor="email" className="report-form-label">
            Email <span className="required-star">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter a valid email address")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="report-form-input"
          />

          <label htmlFor="phone" className="report-form-label">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="report-form-input"
          />

          <label htmlFor="message" className="report-form-label">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
            className="report-form-textarea"
          ></textarea>

          <button type="submit" className="report-form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
