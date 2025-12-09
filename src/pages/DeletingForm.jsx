import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./DeletingForm.css";
import Header1 from "../components/Header1"; 


export default function DeletingForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
         "service_7khbqv2",   // Replace with your EmailJS Service ID
        "template_5asdasz",  // Replace with your EmailJS Template ID
        form.current,
        "J_NJn0m-hM_XMVbUC"    // Replace with your EmailJS Public Key
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
   
      {/* ===== Banner Section ===== */}
        {/* ===== Header Section ===== */}
      <Header1 /> {/* ✅ Display header here */}
      <div className="banner-section">
       
        <div className="overlay">
          <nav className="breadcrumb">
            <a href="/Faq">WhatNew</a> / <a href="/account">Account</a> /{" "}
            <span>Deleting Form</span>
          </nav>
          <h1>WhatNew Deleting Form</h1>
          <p>WhatNew Support June 13, 2025 at 4:54 AM</p>
        </div>
      </div>

      {/* ===== Contact Form Section ===== */}
      <div className="contact-form-section">
       
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
<label>
  Email <span className="required-star">*</span>
        </label>
<input
  type="email"
  name="email"
  placeholder="Enter your email"
  required
  onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address")}
  onInput={(e) => e.target.setCustomValidity("")}
/>

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>


   
    </div>
  );
}
