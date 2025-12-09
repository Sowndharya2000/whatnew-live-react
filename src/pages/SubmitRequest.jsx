import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./SubmitRequest.css";
import Header1 from "../components/Header1";

export default function SubmitRequest() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
        "service_7khbqv2",   // your EmailJS Service ID
        "template_5asdasz",  // your EmailJS Template ID
        form.current,
        "J_NJn0m-hM_XMVbUC"  // your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* ===== Header ===== */}
      <Header1 />

      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <a href="/selling">Selling</a> /{" "}
            <span>Submit A Request</span>
          </nav>
          <h1>Submit A Request</h1>
        </div>
      </div>

      {/* ===== Contact Form Section ===== */}
      <div className="contact-section">
     
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" required />

        <label>
  Email <span className="required">*</span>
</label>
<input type="email" name="email" required />

          <label>Phone Number</label>
          <input type="text" name="phone" required />

          <label>Message</label>
          <textarea name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
