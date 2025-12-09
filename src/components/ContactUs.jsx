// src/pages/ContactUs.jsx  (or src/components/ContactUs.jsx depending on your setup)
import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import Header1 from "./Header1";



export default function ContactUs() {
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
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div>
          {/* ====== Header Section ====== */}
      <Header1 />

      {/* Banner Image Section */}
      <div className="banner-image"></div>

      {/* Contact Section */}
      <div className="image-box">
        <div className="contact-container">
          {/* Left Side: Contact Form */}
          <div className="contact-left">
            <h2>Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Right Side: Google Map */}
          <div className="contact-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.717476617391!2d77.56698141527654!3d12.971598690875272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9c6f02f%3A0x8a3f851c20890c4d!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1697999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Bangalore Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
